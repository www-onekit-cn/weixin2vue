window.exparser.registerBehavior({
    is: "wx-base",
    properties: {
        /*id: {type: String, reflectToAttribute: !1},*/
        hidden: {type: Boolean, reflectToAttribute: !0}},
    debounce: function (e, t, n) {
        let i = this;
        this.__debouncers = this.__debouncers || {}, this.__debouncers[e] && clearTimeout(this.__debouncers[e]), this.__debouncers[e] = setTimeout(function () {
            "function" == typeof t && t(), i.__debouncers[e] = void 0
        }, n)
    }
}), window.exparser.registerBehavior({
    is: "wx-data-component",
    properties: {name: {type: String, reflectToAttribute: !0}},
    getFormData: function () {
        return this.value || ""
    },
    resetFormData: function () {
    }
}), window.exparser.registerBehavior({
    is: "wx-disabled",
    properties: {disabled: {type: Boolean, value: !1, reflectToAttribute: !0}}
}), window.exparser.registerBehavior({
    is: "wx-group",
    properties: {value: {type: String, reflectToAttribute: !0}, curItem: {type: Object}},
    listeners: {
        itemNameChange: "handleItemNameChange",
        itemCheckedChange: "handleItemCheckedChange",
        itemCheck: "handleCheck"
    },
    handleItemCheckedChange: function (e) {
        return e.target.checked ? this.curItem !== e.target && (!this.curItem || (this.curItem.checked = !1), this.curItem = e.target, this.value = e.target.value) : this.curItem === e.target && (this.curItem = null, this.value = ""), !1
    },
    handleItemNameChange: function (e) {
        return e.target === this.curItem && (this.value = e.detail.newval), !1
    },
    handleCheck: function (e) {
        return this.$emit("bindchange", {value: e.detail.value}, !0), !1
    },
    resetFormData: function () {
        if (this.hasBehavior("wx-data-component")) {
            let e = function e(t) {
                t.childNodes.forEach(function (t) {
                    t instanceof exparser.Element && !t.hasBehavior("wx-group") && (t.hasBehavior("wx-item") && t.resetFormData(), e(t))
                })
            };
            e(this)
        }
    }
}), window.exparser.registerBehavior({
    is: "wx-hover",
    properties: {
        hoverStartTime: {type: Number, value: 50},
        hoverStayTime: {type: Number, value: 100},
        hoverClass: {type: String, value: ""},
        hoverStyle: {type: String, value: ""}
    },
    listeners: {
        touchstart: "_hoverTouchStart",
        touchend: "_hoverTouchEnd",
        canceltap: "_hoverCancel",
        touchcancel: "_hoverCancel"
    },
    _hoverTouchStart: function (e) {
        let t = this;
        if ("none" == this.hoverStyle || "none" == this.hoverClass || this.disabled); else {
            if (window.__hoverStyleTimeId)return;
            this.__hoverStyleTimeId = setTimeout(function () {
                t.hoverClass ? t.$el.classList.add(t.hoverClass) : t.$el.classList.add(t.is + "-hover")
            }, this.hoverStartTime), window.__hoverStyleTimeId = this.__hoverStyleTimeId
        }
    },
    _hoverTouchEnd: function () {
        let e = this;
        this.__hoverStyleTimeId && (window.__hoverStyleTimeId == this.__hoverStyleTimeId && (window.__hoverStyleTimeId = void 0), this.__hoverStyleTimeId = void 0), setTimeout(function () {
            e._hoverReset()
        }, this.hoverStayTime)
    },
    _hoverCancel: function () {
        this.__hoverStyleTimeId && (clearTimeout(this.__hoverStyleTimeId), window.__hoverStyleTimeId == this.__hoverStyleTimeId && (window.__hoverStyleTimeId = void 0), this.__hoverStyleTimeId = void 0), this._hoverReset()
    },
    _hoverReset: function () {
        "none" == this.hoverStyle || "none" == this.hoverClass || (this.hoverClass ? this.$el.classList.remove(this.hoverClass) : this.$el.classList.remove(this.is + "-hover"))
    }
}), window.exparser.registerBehavior({
    is: "wx-input-base",
    properties: {
        focus: {type: Number, value: 0, observer: "_focusChange"},
        autoFocus: {type: Boolean, value: !1, reflectToAttribute: !0},
        placeholder: {type: String, value: "", reflectToAttribute: !0, observer: "_placeholderChange"},
        placeholderStyle: {type: String, value: "", reflectToAttribute: !0, ovserver:"_placeholderStyleChange"},
        placeholderClass: {type: String, value: ""},
        formate: {type: String},
        formatePm: {type: String, value: "下午"},
        formateAm: {type: String, value: "上午"},
        fields: {type: String, value: "day", reflectToAttribute: !0},
        start: {type: String, value: ""},
        end: {type: String, value: ""},
        value: {type: String, value: "", coerce: "_valueChange", public: !0},
        showValue: {type: String, value: "", observer: "_showValueChange"},
        maxlength: {type: Number, value: 140, observer: "_maxlengthChanged", reflectToAttribute: !0},
        type: {type: String, value: "text", reflectToAttribute: !0},
        password: {type: Boolean, value: !1, reflectToAttribute: !0},
        disabled: {type: Boolean, value: !1, reflectToAttribute: !0}//,
    //    bindinput: {type: String, value: ""}
    },
    data:{
        onekit_placeholder2:null
    },
    computed:{
        placeholder2:{
            get(){
                return this.onekit_placeholder2;
            },
            set(value){
                this.onekit_placeholder2 = value;
                this._placeholderChange2(value);
            }
        }
    },
    _placeholderStyleChange:function(v){
        this.$refs.placeholder.style = v;
    },
    resetFormData: function () {
        this._keyboardShow && (this.__formResetCallback = !0, wx.hideKeyboard()), this.value = "", this.showValue = ""
    },
    getFormData: function (e) {
        this._keyboardShow ? this.__formCallback = e : "function" == typeof e && e(this.value)
    },
    _formGetDataCallback: function () {
        "function" == typeof this.__formCallback && this.__formCallback(this.value), this.__formCallback = void 0
    },
    _focusChange: function (e) {
        this._couldFocus(Boolean(e))
    },
    _couldFocus: function (e) {
        !this._keyboardShow && this._attached && e && this._inputFocus()
    },
    _placeholderChange: function (v) {
        this.placeholder2 = v;
    },
    _placeholderChange2: function () {
        this._checkPlaceholderStyle(this.value)
    },
    _getPlaceholderClass: function (e) {
        return e ? e : "input-placeholder"
    },
    _checkPlaceholderStyle: function (e) {
        e ? (this.$refs.input.style.display = "flex", this.$refs.input.style.display = "-ms-flexbox", this.$refs.input.style.display = "-webkit-box", this.$refs.placeholder.style.display = "none") : (this.$refs.input.style.display = "none", this.$refs.placeholder.style.display = "flex", this.$refs.placeholder.style.display = "-ms-flexbox", this.$refs.placeholder.style.display = "-webkit-box")
    },
    _showValueFormate: function (e) {
        this.password || "password" == this.type ? this.showValue = e ? new Array(e.length + 1).join("●") : "" : this.showValue = e
    },
    _maxlengthChanged: function (e, t) {
        if ("date" != this.type && "time" != this.type) {
            let n = this.value.slice(0, e);
            n != this.value && (this.value = n)
        }
    },
    _valueChange: function (e, t) {
        return console.info("!!! " + t + " => " + e), this._keyboardShow || ("date" != this.type && "time" != this.type && this.maxlength > 0 && (e = e.slice(0, this.maxlength)), this._checkPlaceholderStyle(e)), this._showValueFormate(e), e
    },
    _showValueChange: function (e) {
        return e
    }
}), window.exparser.registerBehavior({
    is: "wx-item",
    properties: {
        "input.value": {type: String, public: !0, observer: "valueChange", reflectToAttribute: !0},
        "input.checked": {type: Boolean, value: !1, observer: "checkedChange", public: !0, reflectToAttribute: !0}
    },
    data:{
        onekit_checked2:null
    },
    computed: {
        checked2: {
            get: function () {
                return this.onekit_checked2;
            },
            set: function (value) {
                this.onekit_checked2 = value;
                this.checked2Change(value);
            }
        }
    },
    valueChange: function (e, t) {
        this.$emit("itemNameChange", {newval: e, oldval: t})
    },
    checkedChange: function (e, t) {
       this.checked2 = e;
    },
    checked2Change: function (e, t) {
        this.$emit("itemCheckedChange", {newval: e, oldval: t})
    },
    attached: function () {
        this.$emit("itemNameChange", {
            newval: this.value,
            oldval: void 0
        }), this.$emit("itemCheckedChange", {newval: this.checked, oldval: void 0})
    },
    itemCheck: function () {
        this.$emit("itemCheck", {value: this.value})
    },
    resetFormData: function () {
        this.checked2 = !1
    }
}), window.exparser.registerBehavior({
    is: "wx-label-target", properties: {}, handleLabelTap: function () {
    }
}), window.exparser.registerBehavior({
    is: "wx-mask-behavior",
    properties: {mask: {type: Boolean, value: !1, reflectToAttribute: !0}},
    _getMaskStyle: function (e) {
        return e ? "" : "background-color: transparent"
    }
}), window.exparser.registerBehavior({
    is: "wx-player",
    properties: {
        src: {type: String, reflectToAttribute: !0, observer: "srcChanged"},
        poster: {type: String, reflectToAttribute: !0, observer: "posterChanged"},
        _buttonType: {type: String, value: "play"},
        _currentTime: {type: String, value: "00:00"},
        _duration: {type: String, value: "00:00"}
    },
    _formatTime: function (e) {
        let t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), i = e - 3600 * t - 60 * n;
        return 0 == t ? (n >= 10 ? n : "0" + n) + ":" + (i >= 10 ? i : "0" + i) : (t >= 10 ? t : "0" + t) + ":" + (n >= 10 ? n : "0" + n) + ":" + (i >= 10 ? i : "0" + i)
    },
    _publish: function (e, t) {
        this.$emit(e, t)
    },
    timeupdate:function (n) {
        let e = this.$refs.player;
        let t = this;
        let r = 0;
        n.stopPropagation(), "AUDIO" == e.tagName && Math.abs(e.currentTime - r) % e.duration >= 1 && (t._publish("timeupdate", {
            currentTime: e.currentTime,
            duration: e.duration
        }), r = 1e3 * e.currentTime), t._currentTime = t._formatTime(Math.floor(e.currentTime)), t._duration = t._formatTime(Math.floor(e.duration))
    },
    attached: function () {
        let e = this.$refs.player, t = this, n = {};
        for (let i in MediaError)n[MediaError[i]] = i;
        e.onerror = function (e) {
            if (e.stopPropagation(), e.srcElement.error) {
                let i = e.srcElement.error.code;
                t._publish("error", {errMsg: n[i]}), console.log(n[i])
            }
        }, e.onplay = function (n) {
            n.stopPropagation(), "AUDIO" == e.tagName && t._publish("play", {}), t._buttonType = "pause"
        }, e.onpause = function (n) {
            n.stopPropagation(), "AUDIO" == e.tagName && t._publish("pause", {}), t._buttonType = "play"
        }, "AUDIO" == e.tagName && (e.onratechange = function (n) {
            n.stopPropagation(), t._publish("ratechange", {playbackRate: e.playbackRate})
        }, e.onended = function (e) {
            e.stopPropagation(), t._publish("ended", {})
        });
    }
}),window.exparser.registerElement({
    is: "wx-action-sheet",
    template: '\n    <div class="wx-action-sheet-mask" ref="mask" style="z-index:1000;display: none;"></div>\n    <div :class="[\'wx-action-sheet\',!hidden?\'wx-action-sheet-show\':\'\']">\n      <div class="wx-action-sheet-menu">\n        <slot></slot>\n      </div>\n    </div>\n  ',
    behaviors: ["wx-base"],
    properties: {hidden: {type: Boolean, value: !0, observer: "hiddenChange"}},
    listeners: {"mask.tap": "hide", actionSheetCancel: "cancel"},
    cancel: function (e) {
        return this.hide(), !1
    },
    hide: function () {
        this.$emit("bindchange", {}, !0)
    },
    hiddenChange: function (e) {
        let t = this.$refs.mask;
        e ? (setTimeout(function () {
            t.style.display = "none"
        }, 300), t.style.backgroundColor = "rgba(0,0,0,0)") : (t.style.display = "block", t.focus(), t.style.backgroundColor = "rgba(0,0,0,0.6)")
    }
}), window.exparser.registerElement({
    is: "wx-action-sheet-cancel",
    template: '\n    <div class="wx-action-sheet-middle" ref="middle"></div>\n    <div class="wx-action-sheet-cancel" ref="cancel">\n      <slot></slot>\n    </div>\n  ',
    properties: {},
    listeners: {"middle.tap": "handleMiddleTap", "cancel.tap": "handleCancelTap"},
    behaviors: ["wx-base"],
    handleMiddleTap: function (e) {
        return !1
    },
    handleCancelTap: function (e) {
        this.$emit("actionSheetCancel")
    }
}), window.exparser.registerElement({
    is: "wx-action-sheet-item",
    template: "\n    <slot></slot>\n  ",
    properties: {},
    behaviors: ["wx-base"]
}), window.exparser.registerElement({
    is: "wx-audio",
    behaviors: ["wx-base", "wx-player"],
    template: '<div><audio ref="player" style="display: none;" @timeupdate="timeupdate"></audio>\n  <div ref="default" class="default" style="display: none;">\n    <div ref="poster" class="left">\n      <div ref="button" :class="[\'button \',_buttonType]"></div>\n    </div>\n    <div class="right">\n      <div class="time" parse-text-content>{{_currentTime}}</div>\n      <div class="info">\n        <div class="name" parse-text-content>{{name}}</div>\n        <div class="author" parse-text-content>{{author}}</div>\n      </div>\n    </div>\n  </div>\n  <div ref="fakebutton"></div></div>',
    properties: {
        "action": {type: Object, observer: "actionChanged",reflectToAttribute: !0},
        "name": {type: String, value: "未知歌曲",reflectToAttribute: !0},
        "author": {type: String, value: "未知作者",reflectToAttribute: !0},
        "loop": {type: Boolean, value: !1, reflectToAttribute: !0},
        "controls": {type: Boolean, value: !1, reflectToAttribute: !0, observer: "controlsChanged"},
        _srcTimer: {type: Number},
        _actionTimer: {type: Number},
        _canSrc: {type: Boolean, value: !0},
        _deferredSrc: {type: String, value: ""},
        _canAction: {type: Boolean, value: !1},
        _deferredAction: {type: Array, value: []}
    },
    listeners:{
        "button.click":"button_click",
        "fakebutton.click":"fakebutton_click"
    },
    data:{
        onekit_action2:null
    },
    computed: {
        action2: {
            get: function () {
                return this.onekit_action2;
            },
            set: function (value) {
                this.onekit_action2 = value;
                this._actionChanged(value);
            }
        }
    },
    _reset: function () {
        this._buttonType = "play", this._currentTime = "00:00", this._duration = "00:00"
    },
    _readySrc: function () {
        this._canSrc = !0, this.srcChanged(this._deferredSrc), this._deferredSrc = ""
    },
    _readyAction: function () {
        this._canAction = !0, this._deferredAction.forEach(function (e) {
            this.actionChanged(e)
        }, this), this._deferredAction = []
    },
    srcChanged: function (e, t) {
        if (e) {
            console.log("音频组件: 更新资源 " + e), clearTimeout(this._srcTimer), this._canAction = !1, this.$refs.player.src = e;
            let n = this;
            this._srcTimer = setTimeout(function () {
                n._reset(), n._readyAction()
            }, 0)
        }
    },
    posterChanged: function (e, t) {
        this.$refs.poster.style.backgroundImage = "url('" + e + "')"
    },
    controlsChanged: function (e, t) {
        this.$refs.default.style.display = e ? "" : "none"
    },
    actionChanged: function (e, t) {
        this.action2 = e;
    },
    _actionChanged: function (e, t) {
        if (console.log("有新动作"), console.log(e), e) {
            if (!this._canAction)return void this._deferredAction.push(e);
            let n = e.method, i = null;
            if (null != (i = /^set([a-z|A-Z]*)/.exec(n))) {
                let r = i[1], o = e.data;
                r = r[0].toLowerCase() + r.slice(1), "playbackRate" == r || "currentTime" == r ? this.$refs.player[r] = o : this._publishError(i[1] + " is not a action")
            } else{
                "play" != n && "pause" != n || this.$refs.fakebutton.click();
            }
        }
    },
    "button_click": function (n) {
        let t = this;
        n.stopPropagation(), t.action2 = {method: t._buttonType}
    },
    "fakebutton_click":function (n) {
        let t = this;

        n.stopPropagation(), t.$refs.player[t.action2.method]()
    }
}), window.exparser.registerElement({
    is: "wx-button",
    template: '\n  <div><slot></slot></div>\n  ',
    behaviors: ["wx-base", "wx-hover", "wx-label-target"],
    properties: {
        type: {type: String, value: "default", reflectToAttribute: !0},
        size: {type: String, value: "default", reflectToAttribute: !0},
        disabled: {type: Boolean, reflectToAttribute: !0},
        plain: {type: Boolean, reflectToAttribute: !0},
        loading: {type: Boolean, reflectToAttribute: !0},
        formType: {type: String, reflectToAttribute: !0}
    },
    listeners: {tap: "handleLabelTap"},
    handleLabelTap: function () {
        return !this.disabled && void("submit" === this.formType ? this.$emit("formSubmit") : "reset" === this.formType && this.$emit("formReset"))
    }
}), function () {
    function e(e, t, n, i) {
        n = Array.prototype.slice.call(n);
        let r = e + "." + t + "(" + n.map(function (e) {
                return "string" == typeof e ? "'" + e + "'" : e
            }).join(", ") + ")";
        return i && (r = i + " = " + r), r
    }

    function t(e) {
        let t = e.slice(0);
        return t[3] = t[3] / 255, "rgba(" + t.join(",") + ")"
    }

    window.exparser.registerElement({
        is: "wx-canvas",
        behaviors: ["wx-base"],
        template: '<canvas ref="canvas" width="300" height="150"></canvas>',
        properties: {canvasId: {type: String, reflectToAttribute: !0}, _style: {type: Object, value: {}}},
        _updatePosition: function () {
        },
        attached: function () {
               let e = this.$refs.canvas;
            e.width = e.clientWidth;
            e.height = e.clientHeight;
        },
        detached: function () {},
        actionsChanged: function (n, i) {
        },
        _hiddenChanged: function (e, t) {
        }
    })
}(), window.exparser.registerElement({
    is: "wx-web-view",
    behaviors: ["wx-base"],
    template: '<iframe style="width:100%;height:100%;"></iframe>',
}),window.exparser.registerElement({
    is: "wx-movable-area",
    behaviors: ["wx-base"],
    template: '<div><slot></slot></div>',
}),window.exparser.registerElement({
    is: "wx-movable-view",
    behaviors: ["wx-base"],
    properties: {
        x: {type: Number, reflectToAttribute: !0,observer: "x_change"},
        y: {type: Number,reflectToAttribute: !0,observer: "y_change"},
        scaleValue: {type: Number,reflectToAttribute: !0,observer: "scale_change"},
        direction:{type:String,reflectToAttribute: !0,value:"none"}
    },
    scale_change(scale){
        let div = this.$refs.handler;
        div.style.transform = 'scale(' + scale + ')';
        /*
        let x  = parseInt($(div).css("left"));
        x = Math.min(this.$data.WIDTH, x);
        x = Math.max(0,x);
        div.style.left  = x+"px";
        let y  = parseInt($(div).css("top"));
        y = Math.min(this.$data.HEIGHT, y);
        y = Math.max(0,y);
        div.style.top  = y+"px";*/
    },
        x_change(x){
            let div = this.$refs.handler;
            this.$data.onekit_x = x;
            div.style.left = x+"px";
        },
    y_change(y){
        let div = this.$refs.handler;
        this.$data.onekit_y = y;
        div.style.top = y+"px";
    },
    template: '<div ref="handler" style="position:relative"><slot></slot></div>',
    attached:function(){
        let that = this;
        let div = this.$refs.handler;
        let box = div.parentNode;
        let dragFlag = false;
        that.$data.onekit_x=0;
        that.$data.onekit_y=0;
        setTimeout(function() {
            that.$data.WIDTH = $(box).width() - $(div).width();
            that.$data.HEIGHT = $(box).height() - $(div).height();
        },1000);
        div.onmousedown = function (e) {
            e = e || window.event;
            that.$data.x0 = e.clientX-that.$data.onekit_x ;
            that.$data.y0 = e.clientY -that.$data.onekit_y ;
            dragFlag = true;
        };
        document.addEventListener("mouseout",(e)=> {
            if (dragFlag) {
                dragFlag=false;
            }
        });
        document.addEventListener("mousemove",(e)=>{
            if (dragFlag) {
                e = e || window.event;
                if(["horizontal","none"].indexOf(that.$props.direction)<0){
                    let y  = e.clientY - that.$data.y0 ;
                    y = Math.min(that.$data.HEIGHT, y);
                    y = Math.max(0,y);
                    div.style.top  = y+"px";
                    that.$data.onekit_y = y;
                }
                if(["vertical","none"].indexOf(that.$props.direction)<0){
                    let x = e.clientX - that.$data.x0 ;
                    x = Math.min(that.$data.WIDTH, x);
                    x = Math.max(0,x);
                    div.style.left = x+"px";
                    that.$data.onekit_x = x;
                }
            }
        });

        div.onmouseup = function (e) {
            dragFlag = false;
        };
    }
}),window.exparser.registerElement({
    is: "wx-checkbox-group",
    template: '\n    <span ref="wrapper"><slot></slot></span>\n  ',
    behaviors: ["wx-base", "wx-data-component", "wx-group"],
    properties: {value: {type: Array, value: [], reflectToAttribute: !0}},
    remove: function (e) {
        if (void 0 !== e) {
            let t = this.value.indexOf(e);
            t !== -1 && this.value.splice(t, 1)
        }
    },
    add: function (e) {
        void 0 !== e && this.value.indexOf(e) === -1 && this.value.push(e)
    },
    handleItemCheckedChange: function (e) {
        return e.target.checked ? this.add(e.target.value) : this.remove(e.target.value), !1
    },
    handleItemNameChange: function (e) {
        return e.target.checked && (this.remove(e.detail.oldval), this.add(e.detail.newval)), !1
    },
    handleCheck: function () {
        return this.$emit("bindchange", {detail:{value: this.value}}, !0), !1
    }
}), window.exparser.registerElement({
    is: "wx-checkbox",
    template: '\n <span><input ref="input" type="checkbox" />\n    <slot></slot></span>\n  ',
    behaviors: ["wx-base", "wx-label-target", "wx-item", "wx-disabled"],
    properties: {},
    listeners: {"input.change": "inputChange"},
    handleLabelTap: function (e) {
        this.disabled || (this.checked2 = !this.checked2, this.inputChange())
    },
    inputChange: function (e) {
        this.checked2 = this.$refs.input.checked, this.itemCheck()
        this.$emit("bindchange",{detail:{value: this.checked2 }});
    }
}), window.exparser.registerElement({
    is: "wx-form",
    template: '\n    <span ref="wrapper"><slot></slot></span>\n  ',
    behaviors: ["wx-base"],
    properties: {reportSubmit: {type: Boolean, value: !1}},
    listeners: {formSubmit: "submitHandler", formReset: "resetHandler"},
    resetDfs: function (e) {
        if (e.childNodes)for (let t = 0; t < e.childNodes.length; ++t) {
            let n = e.childNodes[t];
            n instanceof exparser.Element && (n.hasBehavior("wx-data-component") && n.resetFormData(), this.resetDfs(n))
        }
    },
    getFormData: function (e, t) {
        return e.name && e.hasBehavior("wx-data-component") ? "WX-INPUT" === e.__domElement.tagName || "WX-PICKER" === e.__domElement.tagName ? e.getFormData(function (e) {
            t(e)
        }) : t(e.getFormData()) : t()
    },
    asyncDfs: function (e, t) {
        let n = this, i = function () {
            "function" == typeof t && t(), t = void 0
        };
        if (!e.childNodes)return i();
        for (let r = e.childNodes.length, o = 0; o < e.childNodes.length; ++o) {
            let a = e.childNodes[o];
            a instanceof exparser.Element ? !function (e) {
                n.getFormData(e, function (t) {
                    "undefined" != typeof t && (n._data[e.name] = t), n.asyncDfs(e, function () {
                        0 == --r && i()
                    })
                })
            }(a) : --r
        }
        0 == r && i()
    },
    submitHandler: function () {
        let e = this;
        return this._data = Object.create(null), this.asyncDfs(this, function () {
            e.reportSubmit ? WeixinJSBridge.invoke("reportSubmitForm", {}, function (t) {
                e.$emit("submit", {value: e._data, formId: t.formId}, !0)
            }) : e.$emit("submit", {value: e._data}, !0)
        }), !1
    },
    resetHandler: function () {
        return this._data = Object.create(null), this.resetDfs(this), this.$emit("reset", {}, !0), !1
    }
}), window.exparser.registerElement({
    is: "wx-icon",
    template: '<span><i :class="[\'wx-icon-\'+type]" :style="{color:color,\'font-size\':size+\'px\'}"></i></span>',
    behaviors: ["wx-base"],
    properties: {
        type: {type: String, reflectToAttribute: !0},
        size: {type: Number, value: 23, reflectToAttribute: !0},
        color: {type: String, reflectToAttribute: !0}
    }
}), window.exparser.registerElement({
    is: "wx-image",
    template: '<div ref="div"></div>',
    behaviors: ["wx-base"],
    properties: {
        src: {type: String, reflectToAttribute: !0, observer: "srcChanged"},
        mode: {type: String, reflectToAttribute: !0, observer: "modeChanged"},
        _disableSizePositionRepeat: {type: Boolean, value: !1},
        backgroundSize: {type: String, observer: "backgroundSizeChanged", value: "100% 100%", reflectToAttribute: !0},
        backgroundPosition: {type: String, observer: "backgroundPositionChanged", reflectToAttribute: !0},
        backgroundRepeat: {
            type: String,
            observer: "backgroundRepeatChanged",
            value: "no-repeat",
            reflectToAttribute: !0
        },
        _img: {type: Object}
    },
    _publishError: function (e) {
        this.$emit("error", e)
    },
    _ready: function () {
        if (!(this._img && this._img instanceof Image)) {
            this._img = new Image;
            let e = this;
            this._img.onerror = function (t) {
                t.stopPropagation();
                let n = {errMsg: "GET " + e._img.src + " 404 (Not Found)"};
                e._publishError(n)
            }, this._img.onload = function (t) {
                t.stopPropagation(), e.$emit("load", {})
                e.modeChanged(e.mode);
            }
        }
    },
    attached: function () {
        this._ready(), this.backgroundSizeChanged(this.backgroundSize), this.backgroundRepeatChanged(this.backgroundRepeat)
    },
    _srcChanged: function (e) {

        this._img.src = e, this.$refs.div.style.backgroundImage = "url('" + e + "')"
    },
    srcChanged: function (e, t) {
        if (e) {
            let n = (this.$refs.div, window.navigator.userAgent.toLowerCase()), i = this;
            this._ready();
            this._srcChanged(e)
        }
    },
    _checkMode: function (e) {
        var n;
        for (let t = ["scaleToFill", "aspectFit", "aspectFill", "top", "bottom", "center", "left", "right", "top left", "top right", "bottom left", "bottom right"], n = !1, i = 0; i < t.length; i++)if (e == t[i]) {
            n = !0;
            break
        }
        return n
    },
    modeChanged: function (e, t) {
        if (!this._checkMode(e))return void(this._disableSizePositionRepeat = !1);
        switch (this._disableSizePositionRepeat = !0, this.$refs.div.style.backgroundSize = "auto auto", this.$refs.div.style.backgroundPosition = "0% 0%", this.$refs.div.style.backgroundRepeat = "no-repeat", e) {
            case"scaleToFill":
                this.$refs.div.style.backgroundSize = "100% 100%";
                break;
            case"aspectFit":
                this.$refs.div.style.backgroundSize = "contain", this.$refs.div.style.backgroundPosition = "center center";
                break;
            case"aspectFill":
                this.$refs.div.style.backgroundSize = "cover", this.$refs.div.style.backgroundPosition = "center center";
                break;
            case"top":
                this.$refs.div.style.backgroundPosition = "top center";
                break;
            case"bottom":
                this.$refs.div.style.backgroundPosition = "bottom center";
                break;
            case"center":
                this.$refs.div.style.backgroundPosition = "center center";
                break;
            case"left":
                this.$refs.div.style.backgroundPosition = "center left";
                break;
            case"right":
                this.$refs.div.style.backgroundPosition = "center right";
                break;
            case"top left":
                this.$refs.div.style.backgroundPosition = "top left";
                break;
            case"top right":
                this.$refs.div.style.backgroundPosition = "top right";
                break;
            case"bottom left":
                this.$refs.div.style.backgroundPosition = "bottom left";
                break;
            case"bottom right":
                this.$refs.div.style.backgroundPosition = "bottom right"
        }
    },
    backgroundSizeChanged: function (e, t) {
        this._disableSizePositionRepeat || (this.$refs.div.style.backgroundSize = e)
    },
    backgroundPositionChanged: function (e, t) {
        this._disableSizePositionRepeat || (this.$refs.div.style.backgroundPosition = e)
    },
    backgroundRepeatChanged: function (e, t) {
        this._disableSizePositionRepeat || (this.$refs.div.style.backgroundRepeat = e)
    }
}),  window.exparser.registerElement({
    is: "wx-textarea",
    template: '\n    <div ref="wrapper">\n      <p ref="placeholder" :class="[_getPlaceholderClass(placeholderClass)]" parse-text-content>{{placeholder}}</p>\n      <input ref="input" :type="_getType(type,password)" :maxlength="maxlength" :value="showValue" :disabled="disabled" >\n    </div>\n    ',
    behaviors: ["wx-base", "wx-data-component", "wx-input-base"],
    properties: {},
    listeners: {
        touchend: "_inputFocus",
        "input.focus": "_inputFocus",
        "input.blur": "_inputBlur",
        "input.change": "_inputChange",
        "input.input": "_inputKey"
    },
    attached: function () {
        let e = this;
        this._checkPlaceholderStyle(this.value), this._attached = !0, window.__onAppRouteDone && this._couldFocus(this.autoFocus), exparser.addListenerToElement(document, "routeDone", function () {
            e._couldFocus(e.autoFocus)
        }), exparser.addListenerToElement(document, "setKeyboardValue", function (t) {
            if (e._keyboardShow) {
                e.value = t.detail.value;
                let n = t.detail.cursor;
                "undefined" != typeof n && n != -1 && e.$refs.input.setSelectionRange(n, n)
            }
        }), exparser.addListenerToElement(document, "hideKeyboard", function (t) {
            e.$refs.input.blur()
        }), this.autoFocus && setTimeout(function () {
            e._couldFocus(e.autoFocus)
        }, 500)
    },
    _getType: function (e, t) {
        return t || "password" == e ? "password" : "text"
    },
    _showValueChange: function (e) {
        this.$refs.input.value = e
    },
    _inputFocus: function (e) {
        this.disabled || (console.log("focus"), this._keyboardShow = !0, this.$emit("focus", {value: this.value}, !0), this.$refs.placeholder.style.display = "none", this.$refs.input.style.display = "flex", this.$refs.input.focus())
    },
    _inputBlur: function (e) {
        this._keyboardShow = !1, this.focus = 0, this.$emit("blur", {value: this.value}, !0), this._checkPlaceholderStyle(this.value)
    },
    _inputKey: function (e) {
            let t = {
                id: this.$el.id,
                dataset: this.$el.dataset,
                offsetTop: this.$el.offsetTop,
                offsetLeft: this.$el.offsetLeft
            };
         this.$emit("bindinput", {
             type: "input",
             timestamp: Date.now(),
             detail: {value: e.target.value, cursor: this.$refs.input.selectionStart},
             target: t,
             currentTarget: t,
             touches: []
         });
    },
    _inputChange: function (e) {
        let t = e.target.value;
        this.value = t, this.$emit("bindchange", {detail:{value: t}}, !0), this._formGetDataCallback()
    }
}), window.exparser.registerElement({
    is: "wx-input",
    template: '\n    <div ref="wrapper">\n      <p ref="placeholder" :class="[_getPlaceholderClass(placeholderClass)]" parse-text-content>{{placeholder}}</p>\n      <input ref="input" :type="_getType(type,password)" :maxlength="maxlength" :value="showValue" :disabled="disabled" >\n    </div>\n    ',
    behaviors: ["wx-base", "wx-data-component", "wx-input-base"],
    properties: {},
    listeners: {
        touchend: "_inputFocus",
        "input.focus": "_inputFocus",
        "input.blur": "_inputBlur",
        "input.change": "_inputChange",
        "input.input": "_inputKey"
    },
    attached: function () {
        let e = this;
        this._checkPlaceholderStyle(this.value), this._attached = !0, window.__onAppRouteDone && this._couldFocus(this.autoFocus), exparser.addListenerToElement(document, "routeDone", function () {
            e._couldFocus(e.autoFocus)
        }), exparser.addListenerToElement(document, "setKeyboardValue", function (t) {
            if (e._keyboardShow) {
                e.value = t.detail.value;
                let n = t.detail.cursor;
                "undefined" != typeof n && n != -1 && e.$refs.input.setSelectionRange(n, n)
            }
        }), exparser.addListenerToElement(document, "hideKeyboard", function (t) {
            e.$refs.input.blur()
        }), this.autoFocus && setTimeout(function () {
            e._couldFocus(e.autoFocus)
        }, 500)
    },
    _getType: function (e, t) {
        return t || "password" == e ? "password" : "text"
    },
    _showValueChange: function (e) {
        this.$refs.input.value = e
    },
    _inputFocus: function (e) {
        this.disabled || (console.log("focus"), this._keyboardShow = !0, this.$emit("focus", {value: this.value}, !0), this.$refs.placeholder.style.display = "none", this.$refs.input.style.display = "flex", this.$refs.input.focus())
    },
    _inputBlur: function (e) {
        this._keyboardShow = !1, this.focus = 0, this.$emit("blur", {value: this.value}, !0), this._checkPlaceholderStyle(this.value)
    },
    _inputKey: function (e) {
        let t = {
            id: this.$el.id,
            dataset: this.$el.dataset,
            offsetTop: this.$el.offsetTop,
            offsetLeft: this.$el.offsetLeft
        };
        this.$emit("bindinput", {
            type: "input",
            timestamp: Date.now(),
            detail: {value: e.target.value, cursor: this.$refs.input.selectionStart},
            target: t,
            currentTarget: t,
            touches: []
        });
    },
    _inputChange: function (e) {
        let t = e.target.value;
        this.value = t, this.$emit("bindchange", {detail:{value: t}}, !0), this._formGetDataCallback()
    }
}),window.exparser.registerElement({
    is: "wx-label",
    template: "\n  <span><slot></slot></span>\n  ",
    properties: {For: {type: String, reflectToAttribute: !0}},
    listeners: {tap: "onTap"},
    behaviors: ["wx-base"],
    handleNode: function (e) {
        return !!(e instanceof exparser.Element && e.hasBehavior("wx-label-target")) && (e.handleLabelTap(), !0)
    },
    dfs: function (e) {
        if (this.handleNode(e))return !0;
        if (!e.childNodes)return !1;
        for (let t = 0; t < e.childNodes.length; ++t)if (this.dfs(e.childNodes[t]))return !0;
        return !1
    },
    onTap: function (e) {
        for (let t = e.target; t !== this; t = t.parentNode)if (t instanceof exparser.Element && t.hasBehavior("wx-label-target"))return;
        if (this.for) {
            let n = document.getElementById(this.for);
            n && this.handleNode(n.__wxElement)
        } else this.dfs(this)
    }
}), window.exparser.registerElement({
    is: "wx-loading",
    template: '\n    <div class="wx-loading-mask" style="border:10px solid red;margin:10px;"></div>\n  ',
    behaviors: ["wx-base"]
}), window.exparser.registerElement({
    is: "wx-map",
    behaviors: ["wx-base"],
    template: '<div ref="map" style="width: 100%; height: 100%;"></div>',
    properties: {
        latitude: {type: Number, reflectToAttribute: !0, observer: "latitudeChanged", value: 39.92},
        longitude: {type: Number, reflectToAttribute: !0, observer: "longitudeChanged", value: 116.46},
        scale: {type: Number, reflectToAttribute: !0, observer: "scaleChanged", value: 16},
        markers: {type: Array, value: [], reflectToAttribute: !1, observer: "markersChanged"},
        covers: {type: Array, value: [], reflectToAttribute: !1, observer: "coversChanged"},
        polyline: {type: Array, value: [], reflectToAttribute: !1, observer: "polylineChanged"},
        circles: {type: Array, value: [], reflectToAttribute: !1, observer: "circlesChanged"},
        controls: {type: Array, value: [], reflectToAttribute: !1, observer: "controlsChanged"},
        includPoints: {type: Array, value: [], reflectToAttribute: !1, observer: "includePointsChanged"},
        showLocation: {type: Boolean, reflectToAttribute: !1, observer: "showLocationChanged"},
        polygons: {type: Array, value: [], reflectToAttribute: !1, observer: "polygonsChanged"},
        subkey: {type: String, reflectToAttribute: !1, observer: "subkeyChanged"},
        layerStyle: {type: Boolean, reflectToAttribute: !1, observer: "layerStyleChanged"},
        rotate: {type: Boolean, reflectToAttribute: !1, observer: "rotateChanged"},
        skew: {type: Boolean, reflectToAttribute: !1, observer: "skewChanged"},
        enable3D: {type: Boolean, reflectToAttribute: !1, observer: "enable3DChanged"},
        showCompass: {type: Boolean, reflectToAttribute: !1, observer: "showCompassChanged"},
        enableOverlooking: {type: Boolean, reflectToAttribute: !1, observer: "enableOverlookingChanged"},
        enableZoom: {type: Boolean, reflectToAttribute: !1, observer: "enableZoomChanged"},
        enableScroll: {type: Boolean, reflectToAttribute: !1, observer: "enableScrollChanged"},
        enableRotate: {type: Boolean, reflectToAttribute: !1, observer: "enableRotateChanged"},
        enableSatellite: {type: Boolean, reflectToAttribute: !1, observer: "enableSatelliteChanged"},
        enableTraffic: {type: Boolean, reflectToAttribute: !1, observer: "enableTrafficChanged"}
    },
    _delay: function (e, t, n) {
    },
    update: function (e, t) {
    },
    _updatePosition: function () {
    },
    _hiddenChanged: function (e, t) {
    },
    latitudeChanged: function (e, t) {
    },
    longitudeChanged: function (e, t) {
    },
    scaleChanged: function (e, t) {
    },
    markersChanged:function(e,t){

    },
    coversChanged: function (e, t) {
    },
    attached: function () {
        let object = {
            center: new qq.maps.LatLng(this.$props.latitude,this.$props.longitude),
            zoom:this.$props.scale
        };
        let map = new qq.maps.Map(this.$refs.map,object);
    },
    detached: function () {

    }
}), window.exparser.registerElement({
    is: "wx-mask",
    template: '\n    <div class="wx-mask" ref="mask" style="display: none;">\n  ',
    behaviors: ["wx-base"],
    properties: {hidden: {type: Boolean, value: !0, observer: "hiddenChange"}},
    hiddenChange: function (e) {
        let t = this.$refs.mask;
        e === !0 ? (setTimeout(function () {
            t.style.display = "none"
        }, 300), this.$refs.mask.classList.add("wx-mask-transparent")) : (t.style.display = "block", t.focus(), t.classList.remove("wx-mask-transparent"))
    }
}), window.exparser.registerElement({
    is: "wx-modal",
    template: '\n    <div ref="mask" class="wx-modal-mask"></div>\n    <div class="wx-modal-dialog">\n      <div class="wx-modal-dialog-hd">\n        <strong parse-text-content>{{title}}</strong>\n      </div>\n      <div class="wx-modal-dialog-bd">\n        <slot></slot>\n      </div>\n      <div class="wx-modal-dialog-ft">\n        <a hidden$="{{noCancel}}" ref="cancel" class="wx-modal-btn-default" parse-text-content>{{cancelText}}</a>\n        <a ref="confirm" class="wx-modal-btn-primary" parse-text-content>{{confirmText}}</a>\n      </div>\n    </div>\n  ',
    behaviors: ["wx-base"],
    properties: {
        title: {type: String, reflectToAttribute: !0},
        noCancel: {type: Boolean, value: !1, reflectToAttribute: !0},
        confirmText: {type: String, value: "确定", reflectToAttribute: !0},
        cancelText: {type: String, value: "取消", reflectToAttribute: !0}
    },
    listeners: {"mask.tap": "_handleCancel", "confirm.tap": "_handleConfirm", "cancel.tap": "_handleCancel"},
    _handleConfirm: function () {
        this.$emit("confirm", {}, !0)
    },
    _handleCancel: function () {
        this.$emit("cancel", {}, !0)
    }
}), window.exparser.registerElement({
    is: "wx-navigator",
    behaviors: ["wx-base", "wx-hover"],
    template: '<div ref="wrapper"><slot></slot></div>',
    properties: {
        url: {type: String, reflectToAttribute: !0},
        redirect: {type: Boolean, value: !1, reflectToAttribute: !0},
        hoverClass: {type: String, value: ""},
        hoverStyle: {type: String, value: ""}
    },
    listeners: {tap: "navigateTo"},
    attached: function () {
        this.hoverStayTime = 400
    },
    navigateTo: function () {
        this.url ? this.redirect ? wx.redirectTo({url: this.url}) : wx.navigateTo({url: this.url}) : console.log("navigator should have url attribute")
    }
}), /wechatdevtools/.test(window.navigator.userAgent.toLowerCase()) && window.exparser.registerElement({
    is: "wx-picker",
    template: '\n  \t<div><div ref="wrapper"><slot></slot></div>\n    <div ref="selector" style="display:none;" class="wx-picker" >\n      <div class="wx-picker-hd">\n        <a class="wx-picker-action" ref="cancel">取消</a>\n        <a class="wx-picker-action" ref="confirm">确定</a>\n      </div>\n      <div class="wx-picker-bd">\n        <div class="wx-picker-group" ref="group">\n          <div class="wx-picker-mask2">\n          </div>\n          <div class="wx-picker-indicator">\n          </div>\n          <div class="wx-picker-content" ref="inner">\n          </div>\n        </div>\n      </div>\n    </div></div>\n  ',
    behaviors: ["wx-base", "wx-data-component"],
    properties: {
        curLoc: {type: Number, value: 0},
        diffLoc: {type: Number, value: 0},
        range: {type: Array, value: [], observer: "rangeChange"},
        value: {type: Number, value: 0, coerce: "valueChange", reflectToAttribute: !0},
        mode: {type: String, value: "selector", reflectToAttribute: !0},
        fields: {type: String, value: "day", reflectToAttribute: !0},
        start: {type: String, value: ""},
        end: {type: String, value: ""}
    },
    attached: function () {
        this.insertItem(this.range)
    },
    valueChange: function (e) {
        return isNaN(parseInt(e)) || (e >= this.range.length && (e = this.range.length - 1), this.curLoc = 34 * (3 - e), this.$refs.inner.style.transform = "translate3d(0px, " + this.curLoc + "px, 0px)"), e
    },
    rangeChange: function (e) {
        this.insertItem(e)
    },
    insertItem: function (e) {
        if ("selector" == this.mode) {
            this.$refs.inner.innerHTML = "";
            for (let t = 0; t < e.length; t++) {
                let n = document.createElement("wx-picker-item");
                n.innerHTML = '<div class="wx-picker-item">' + e[t] + "</div>", this.$refs.inner.appendChild(n)
            }
        }
    },
    listeners: {
        tap: "showPickerView",
        "cancel.tap": "hide",
        "confirm.tap": "confirm",
        "group.touchstart": "getStartLoc",
        "group.touchmove": "moveWrapper",
        "group.touchend": "moveEnd"
    },
    showPickerView: function () {
        "selector" == this.mode && (this.$refs.selector.style.display = "block")
    },
    pickerGetMaskStyle: function (e) {
        return "z-index:1000;" + (e ? "" : "background-color: transparent")
    },
    getStartLoc: function (e) {
        this.startLoc = e.touches[0].clientY
    },
    moveWrapper: function (e) {
        return this.diffLoc = e.touches[0].clientY - this.startLoc, this.$refs.inner.style.transition = "all 0s", this.$refs.inner.style.transform = "translate3d(0px, " + (this.diffLoc + this.curLoc) + "px, 0px)", !1
    },
    moveEnd: function (e) {
        this.curLoc = this.diffLoc + this.curLoc;
        let t = this.curLoc % 34;
        t < 0 && (t += 34), t < 17 ? this.curLoc = this.curLoc - t : this.curLoc = this.curLoc - t + 34, this.curLoc < Math.min(34 * (4 - this.childNodes.length), 0) ? this.curLoc = Math.min(34 * (4 - this.childNodes.length), 0) : this.curLoc > 102 && (this.curLoc = 102), this.$refs.inner.style.transition = "all 0.3s", this.$refs.inner.style.transform = "translate3d(0px, " + this.curLoc + "px, 0px)"
    },
    hide: function () {
        return console.log(11), this.$refs.selector.style.display = "none", !1
    },
    confirm: function (e) {
        let t = 3 - this.curLoc / 34;
        return this.value = t, this.$emit("bindchange", {value: this.value}, !0), this.hide(), !1
    }
}), /wechatdevtools/.test(window.navigator.userAgent.toLowerCase()) || window.exparser.registerElement({
    is: "wx-picker",
    template: '<div ref="wrapper"><slot></slot></div>',
    behaviors: ["wx-base", "wx-data-component"],
    properties: {
        range: {type: Array, value: []},
        value: {type: String, value: "", reflectToAttribute: !0},
        mode: {type: String, value: "selector", reflectToAttribute: !0},
        fields: {type: String, value: "day", reflectToAttribute: !0},
        start: {type: String, value: ""},
        end: {type: String, value: ""}
    },
    listeners: {tap: "showPickerView"},
    resetFormData: function () {
        "selector" == this.mode ? this.value = -1 : this.value = ""
    },
    getFormData: function (e) {
        this.__pickerShow ? this.__formCallback = e : "function" == typeof e && e(this.value)
    },
    formGetDataCallback: function () {
        "function" == typeof this.__formCallback && this.__formCallback(this.value), this.__formCallback = void 0
    },
    showPickerView: function () {
        "date" == this.mode || "time" == this.mode ? this.showDatePickerView() : this.showSelector()
    },
    getCustomerStyle: function () {
        let e = this.$refs.wrapper.getBoundingClientRect();
        return {width: e.width, height: e.height, left: e.left + window.scrollX, top: e.top + window.scrollY}
    },
    showSelector: function (e) {
        let t = this, n = parseInt(this.value);
        (isNaN(n) || n >= this.range.length) && (n = 0);
        for (let i = [], r = 0; r < this.range.length; r++)i.push(this.range[r] + "");
        WeixinJSBridge.invoke("showPickerView", {array: i, current: n, style: this.getCustomerStyle()}, function (e) {
            console.info(JSON.stringify(e)), /:ok/.test(e.errMsg) ? (t.value = e.index, t.$emit("bindchange", {value: t.value}, !0)) : console.error(e.errMsg), t.resetPickerState(), t.formGetDataCallback()
        }), this.__pickerShow = !0
    },
    showDatePickerView: function () {
        let e = this;
        WeixinJSBridge.invoke("showDatePickerView", {
            range: {start: this.start, end: this.end},
            mode: this.mode,
            current: this.value,
            fields: this.fields,
            style: this.getCustomerStyle()
        }, function (t) {
            console.info(JSON.stringify(t)), /:ok/.test(t.errMsg) ? (e.value = t.value, e.$emit("bindchange", {value: e.value}, !0)) : console.error(t.errMsg), e.resetPickerState(), e.formGetDataCallback()
        }), this.__pickerShow = !0
    },
    resetPickerState: function () {
        this.__pickerShow = !1
    }
}), window.exparser.registerElement({
    is: "wx-picker-item",
    template: '\n    <div :class="[\'wx-picker-item\',disabled?\'wx-picker-item-disabled\':\'\']">\n      <slot></slot>\n    </div>\n  ',
    properties: {},
    behaviors: ["wx-base", "wx-disabled", "wx-item"]
}), window.exparser.registerElement({
    is: "wx-progress",
    template: '\n   <div><div class="wx-progress-bar" :style="{height:strokeWidth+\'px\'}">\n      <div class="wx-progress-inner-bar" :style="{width:curPercent+\'%\',\'background-color\':color}"></div>\n    </div>\n    <p class="wx-progress-info" parse-text-content :hidden="!showInfo">\n      {{curPercent}}%\n    </p></div> \n  ',
    behaviors: ["wx-base"],
    properties: {
        percent: {type: Number, reflectToAttribute: !0, observer: "percentChange"},
        curPercent: {type: Number},
        showInfo: {type: Boolean, value: !1, reflectToAttribute: !0},
        strokeWidth: {type: Number, value: 6, reflectToAttribute: !0},
        color: {type: String, value: "#09BB07", reflectToAttribute: !0},
        active: {type: Boolean, value: !1, reflectToAttribute: !0, observer: "activeAnimation"}
    },
    percentChange: function (e) {
        e > 100 && (this.percent = 100), e < 0 && (this.percent = 0), this.__timerId && clearInterval(this.__timerId), this.activeAnimation(this.active)
    },
    activeAnimation: function (e) {
        if (!isNaN(this.percent))if (e) {
            let t = function () {
                return this.percent <= this.curPercent + 1 ? (this.curPercent = this.percent, void clearInterval(this.__timerId)) : void++this.curPercent
            };
            this.curPercent = 0, this.__timerId = setInterval(t.bind(this), 30), t.call(this)
        } else this.curPercent = this.percent
    },
    detached: function () {
        this.__timerId && clearInterval(this.__timerId)
    }
}), window.exparser.registerElement({
    is: "wx-radio",
    template: '\n   <span> <input ref="input" class="wx-radio-check" type="radio" :disabled="disabled"/>\n    <slot></slot></span>\n  ',
    behaviors: ["wx-base", "wx-label-target", "wx-disabled", "wx-item"],
    properties: {},
    listeners: {"input.change": "inputChange"},
    handleLabelTap: function (e) {
        this.disabled || this.checked2 || (this.checked2 = !this.checked2, this.inputChange())
    },
    inputChange: function (e) {
        this.checked2 = this.$refs.input.checked, this.itemCheck()
    }
}), window.exparser.registerElement({
    is: "wx-radio-group",
    template: '\n    <span ref="wrapper">\n      <slot></slot>\n    </span>\n  ',
    behaviors: ["wx-base", "wx-data-component", "wx-group"],
    properties: {}
}), window.exparser.registerElement({
    is: "wx-scroll-view",
    template: '\n    <div ref="main">\n      <slot></slot>\n      <div style="position: fixed; top: 0; left: 0; width: 1px; height: 1px; background-color: transparent; opacity: .01; font-size: 1px; overflow: hidden;">.</div>\n    </div>\n  ',
    behaviors: ["wx-base"],
    properties: {
        scrollX: {type: Boolean, value: !1, reflectToAttribute: !0},
        scrollY: {type: Boolean, value: !1, reflectToAttribute: !0},
        upperThreshold: {type: Number, value: 50, reflectToAttribute: !0},
        lowerThreshold: {type: Number, value: 50, reflectToAttribute: !0},
        scrollTop: {type: Number, observer: "_scrollTopChanged", reflectToAttribute: !0},
        scrollLeft: {type: Number, observer: "_scrollLeftChanged", reflectToAttribute: !0},
        scrollIntoView: {type: String, observer: "_srollIntoViewChanged", reflectToAttribute: !0}
    },
    listeners: {"main.track": "_handleTrack"},
    created: function () {
        this._lastScrollTop = this.scrollTop || 0, this._lastScrollLeft = this.scrollLeft || 0
    },
    attached: function () {
        let e = this;
        this._scrollTopChanged(this.scrollTop), this._scrollLeftChanged(this.scrollLeft), this._srollIntoViewChanged(this.scrollIntoView), this.__handleScroll = function (t) {
            e._handleScroll.bind(e, t)()
        }, this.$refs.main.addEventListener("scroll", this.__handleScroll), this.$refs.main.style.overflowX = this.scrollX ? "auto" : "hidden", this.$refs.main.style.overflowY = this.scrollY ? "auto" : "hidden"
    },
    detached: function () {
        this.$refs.main.removeEventListener("scroll", this.__handleScroll)
    },
    _getStyle: function (e, t) {
        let n = e ? "auto" : "hidden", i = t ? "auto" : "hidden";
        return "overflow-x: " + n + "; overflow-y: " + i + ";"
    },
    _handleTrack: function (e) {
        return "start" === e.detail.state ? (this._x = e.detail.x, this._y = e.detail.y, void(this._noBubble = null)) : ("end" === e.detail.state && (this._noBubble = !1), null === this._noBubble && this.scrollY && (Math.abs(this._y - e.detail.y) / Math.abs(this._x - e.detail.x) > 1 ? this._noBubble = !0 : this._noBubble = !1), null === this._noBubble && this.scrollX && (Math.abs(this._x - e.detail.x) / Math.abs(this._y - e.detail.y) > 1 ? this._noBubble = !0 : this._noBubble = !1), this._x = e.detail.x, this._y = e.detail.y, void(this._noBubble && e.stopPropagation()))
    },
    _handleScroll: function (e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(function () {
            let e = this.$refs.main;
            if (this.scrollY) {
                let t = this._lastScrollTop - e.scrollTop > 0, n = this._lastScrollTop - e.scrollTop < 0;
                e.scrollTop <= this.upperThreshold && t && this.$emit("scrolltoupper", {direction: "top"}, !0), e.scrollTop + e.offsetHeight + this.lowerThreshold >= e.scrollHeight && n && this.$emit("scrolltolower", {direction: "bottom"}, !0)
            }
            if (this.scrollX) {
                let i = this._lastScrollLeft - e.scrollLeft > 0, r = this._lastScrollLeft - e.scrollLeft < 0;
                e.scrollLeft <= this.upperThreshold && i && this.$emit("scrolltoupper", {direction: "left"}, !0), e.scrollLeft + e.offsetWidth + this.lowerThreshold >= e.scrollWidth && r && this.$emit("scrolltolower", {direction: "right"}, !0)
            }
            this._lastScrollTop = e.scrollTop, this._lastScrollLeft = e.scrollLeft, this.$emit("scroll", {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop,
                deltaX: this._lastScrollLeft - e.scrollLeft,
                deltaY: this._lastScrollTop - e.scrollTop
            }, !0)
        }.bind(this), 50)
    },
    _scrollTopChanged: function (e) {
        this.scrollY && (this.$refs.main.scrollTop = e)
    },
    _scrollLeftChanged: function (e) {
        this.scrollX && (this.$refs.main.scrollLeft = e)
    },
    _srollIntoViewChanged: function (e) {
        if (e) {
            let t = this.$el.querySelector("#" + e);
            t && (this.$refs.main.scrollTop = t.offsetTop)
        }
    }
}), window.exparser.registerElement({
    is: "wx-slider",
    template: '\n    <div :class="[\'wx-slider-wrapper\',disabled?\'wx-slider-disabled\':\'\']">\n      <div class="wx-slider-handle-wrapper" ref="wrapper">\n        <div class="wx-slider-handle" :style="{left:_getValueWidth(value2,min,max)}" draggable="true" ref="handle">\n        </div>\n        <div class="wx-slider-track" :style="{width:_getValueWidth(value2,min,max)}"></div>\n        <div class="wx-slider-step" ref="step"></div>\n      </div>\n      <span :hidden="!showValue" class="wx-slider-value">\n        <p parse-text-content>{{value2}}</p>\n      </span>\n    </div>\n  ',
    properties: {
        min: {type: Number, value: 0, reflectToAttribute: !0, observer: "_revalicateRange"},
        max: {type: Number, value: 100, reflectToAttribute: !0, observer: "_revalicateRange"},
        step: {type: Number, value: 1, reflectToAttribute: !0},
        value: {type: Number, value: 0, reflectToAttribute: !0, observer: "_valueRange"},
        showValue: {type: Boolean, value: !1, reflectToAttribute: !0}
    },
    _valueRange:function (value) {
      this.value2 = value;
    },
    data:{
        onekit_value2:null
    },
    computed: {
        value2: {
            get(){
                return this.onekit_value2;
            }, set(value){
                value = this._filterValue(value);
                this.onekit_value2 = value;
            }
        }
    },
    attached:function () {
        this.onekit_value2 = this.value;
    },
    listeners: {"handle.track": "_onTrack", "wrapper.tap": "_onTap"},
    behaviors: ["wx-base", "wx-data-component", "wx-disabled"],
    _filterValue: function (e) {
        if (e < parseFloat(this.min))return parseFloat(this.min);
        if (e > parseFloat(this.max))return parseFloat(this.max);
        let t = Math.round((e - parseFloat(this.min)) / this.step);
        return t * this.step + parseFloat(this.min)
    },
    _revalicateRange: function () {
        this.value2 = this._filterValue(this.value)
    },
    _getValueWidth: function (e, t, n) {
        return 100 * (e - t) / (n - t) + "%"
    },
    _getXPosition: function (e) {
        let t;
        for ( t = e.offsetLeft; e; e = e.offsetParent)t += e.offsetLeft;
        return t - document.body.scrollLeft
    },
    _onUserChangedValue: function (e) {
        e = Onekit_WX.event(e);
        let t = this.$refs.step.offsetWidth, n = this._getXPosition(this.$refs.step), i = (e.detail.x - n) * (parseFloat(this.max) - parseFloat(this.min)) / t + parseFloat(this.min);
        i = this._filterValue(i), this.value2 = i
    },
    _onTrack: function (e) {
        if (!this.disabled)return "move" === e.detail.state ? (this._onUserChangedValue(e), !1) : void("end" === e.detail.state && this.$emit("bindchange", {value: this.value2}, !0))
    },
    _onTap: function (e) {
        this.disabled || (this._onUserChangedValue(e), this.$emit("bindchange", {detail:{value: this.value2}}, !0))
    },
    resetFormData: function () {
        this.value2 = parseFloat(this.min)
    }
}), window.exparser.registerElement({
    is: "wx-selector-item",
    template: '\n    <li ref="main" :class="[\'wx-selector-item\'+getSelected(checked)+getDisabled(disabled)]">\n      <i :class="[\'wx-icon-\'+icon]" hidden$="{{!icon}}" style="font-size:14px"></i>\n      <slot></slot>\n    </li>\n  ',

    behaviors: ["wx-base", "wx-disabled", "wx-item"],
    properties: {icon: {type: String, reflectToAttribute: !0}, text: {type: String}},
    listeners: {tap: "onThisTap"},
    getDisabled: function (e) {
        return e ? " wx-selector-item-disabled" : ""
    },
    getSelected: function (e) {
        return e ? " wx-selector-item-selected" : ""
    },
    onThisTap: function (e) {
        this.disabled || (this.checked = !0, this.itemCheck())
    },
    attached: function () {
        this.text = this.$refs.content.innerHTML, this.$emit("itemCheckedChange", {
            newval: this.checked,
            oldval: void 0
        })
    }
}), window.exparser.registerElement({
    is: "wx-swiper",
    template: '\n    <div ref="slidesWrapper" class="wx-swiper-wrapper">\n      <div ref="slides" :class="[\'wx-swiper-slides\',_tracking?\'wx-swiper-slides-tracking\':\'\']" :style="{transition-duration:duration+\'ms\'}">\n        <slot></slot>\n      </div>\n      <div ref="slidesDots" hidden$="{{!indicatorDots}}" :class="[\'wx-swiper-dots\',vertical?\'wx-swiper-dots-horizontal\':\'\',vertical?\'wx-swiper-dots-vertical\':\'\']">\n        <wx-repeat items="{{_slidesVisible}}">\n          <div data-dot-index$="{{index}}" class=["wx-swiper-dot",item?"wx-swiper-dot-active":""] :style="{transition-duration:duration+\'ms\'}"></div>\n        </wx-repeat>\n      </div>\n    </div>\n  ',
    behaviors: ["wx-base"],
    properties: {
        indicatorDots: {type: Boolean, value: !1, reflectToAttribute: !0},
        vertical: {type: Boolean, value: !1, observer: "_initSlides", reflectToAttribute: !0},
        autoplay: {type: Boolean, value: !1, observer: "_autoplayChanged", reflectToAttribute: !0},
        interval: {type: Number, value: 5e3, reflectToAttribute: !0},
        duration: {type: Number, value: 1e3, reflectToAttribute: !0},
        current: {
            type: Number,
            value: 0,
            coerce: "_normalizeCurrentSlide",
            observer: "_currentSlideChanged",
            reflectToAttribute: !0
        },
        _slidesVisible: Array,
        _tracking: Boolean
    },
    listeners: {"slides.track": "handleContentTrack", "slidesDots.tap": "handleDotTap"},
    attached: function () {
        this._attached = !0, this._initSlides(), this.autoplay && this._scheduleNextSlide()
    },
    detached: function () {
        this._attached = !1, this._cancelSchedule()
    },
    contentChanged: function () {
        this._initSlides()
    },
    _initSlides: function () {
        if (this._attached) {
            for (let e = this.$refs.content.childNodes, t = 0, n = this.vertical, i = 0; i < e.length; i++) {
                let r = e[i];
                "WX-SWIPER-ITEM" === r.tagName && (r.style.position = "absolute", r.style.width = "100%", r.style.height = "100%", n ? (r.style.left = 0, r.style.top = 100 * t + "%") : (r.style.top = 0, r.style.left = 100 * t + "%"), t++)
            }
            this._slideCount = t;
            let o = this._normalizeCurrentSlide(this.current);
            n ? (this.$refs.slides.style.top = 100 * -o + "%", this.$refs.slides.style.left = 0) : (this.$refs.slides.style.top = 0, this.$refs.slides.style.left = 100 * -o + "%"), this._updateDots(o)
        }
    },
    _getDirectionName: function (e) {
        return e ? "vertical" : "horizontal"
    },
    _scheduleNextSlide: function () {
        let e = this;
        this._cancelSchedule(), this._attached && (this._scheduleTimeoutObj = setTimeout(function () {
            e._scheduleTimeoutObj = null, e.current++
        }, this.interval))
    },
    _cancelSchedule: function () {
        this._scheduleTimeoutObj && (clearTimeout(this._scheduleTimeoutObj), this._scheduleTimeoutObj = null)
    },
    _updateDots: function (e) {
        for (let t = [], n = 0; n < this._slideCount; n++)t[n] = n === e;
        this._slidesVisible = t
    },
    _gotoSlide: function (e) {
        this._slideCount && (this._updateDots(e), this.vertical ? this.$refs.slides.style.top = -100 * e + "%" : this.$refs.slides.style.left = -100 * e + "%", this.autoplay && this._scheduleNextSlide(), this.$emit("bindchange", {current: e}, !0))
    },
    _autoplayChanged: function (e) {
        e ? this._scheduleNextSlide() : this._cancelSchedule()
    },
    _normalizeCurrentSlide: function (e) {
        return this._slideCount ? (Math.round(e) % this._slideCount + this._slideCount) % this._slideCount : e
    },
    _currentSlideChanged: function (e) {
        this._gotoSlide(e)
    },
    handleDotTap: function (e) {
        let t = Number(e.target.dataset.dotIndex);
        this.current = t
    },
    handleContentTrack: function (e) {
        if ("start" === e.detail.state)return this._contentTrackX = parseFloat(this.$refs.slides.style.left), this._contentTrackY = parseFloat(this.$refs.slides.style.top), this._contentTrackStartX = e.detail.x, this._contentTrackStartY = e.detail.y, this._contentTrackPrevX = e.detail.x, this._contentTrackPrevY = e.detail.y, this._contentTrackS = 0, this._contentTrackT = Date.now(), this._tracking = !0, void(this._trackingDirectionChecked = !1);
        if (this._tracking) {
            let t = e.detail.x - this._contentTrackStartX, n = e.detail.y - this._contentTrackStartY, i = e.detail.x - this._contentTrackPrevX, r = e.detail.y - this._contentTrackPrevY;
            if (this._contentTrackPrevX = e.detail.x, this._contentTrackPrevY = e.detail.y, !this._trackingDirectionChecked) {
                if (Math.abs(t) <= Math.abs(n) && !this.vertical || Math.abs(t) >= Math.abs(n) && this.vertical)return void(this._tracking = !1);
                this._trackingDirectionChecked = !0
            }
            if ("end" === e.detail.state) {
                this.autoplay && this._scheduleNextSlide(), this._tracking = !1;
                let o = 0;
                Math.abs(this._contentTrackS) / (Date.now() - this._contentTrackT) > 1 && (o = 50 * this._contentTrackS / Math.abs(this._contentTrackS));
                let a = 0;
                return a = this.vertical ? this._normalizeCurrentSlide(-(parseFloat(this.$refs.slides.style.top) + o) / 100) : this._normalizeCurrentSlide(-(parseFloat(this.$refs.slides.style.left) + o) / 100), void(this.current !== a ? this.current = a : this.vertical ? this.$refs.slides.style.top = -100 * a + "%" : this.$refs.slides.style.left = -100 * a + "%")
            }
            this._cancelSchedule();
            let s = this._slideCount, c = function (e) {
                return .5 - .25 / (e + .5)
            };
            if (this._contentTrackS = 0, this._contentTrackT = Date.now(), this.vertical) {
                let l = this._contentTrackY + n / this.$refs.slidesWrapper.offsetHeight * 100;
                l > 0 ? l = 100 * c(l / 100) : 100 - l > 100 * s ? l = 100 * (1 - c(1 - l / 100 - s) - s) : this._contentTrackS = r, this.$refs.slides.style.top = l + "%"
            } else {
                let d = this._contentTrackX + t / this.$refs.slidesWrapper.offsetWidth * 100;
                d > 0 ? d = 100 * c(d / 100) : 100 - d > 100 * s ? d = 100 * (1 - c(1 - d / 100 - s) - s) : this._contentTrackS = i, this.$refs.slides.style.left = d + "%"
            }
            return !1
        }
    }
}), window.exparser.registerElement({
    is: "wx-swiper-item",
    template: "\n    <slot></slot>\n  ",
    properties: {},
    behaviors: ["wx-base"]
}), window.exparser.registerElement({
    is: "wx-switch",
    template: '\n    <div  style="display: inline-block">\n      <span :hidden="!isSwitch(type)">\n        <input ref="switchInput" class="weui_switch" type="checkbox" :checked="checked2" />\n      </span>\n      <span :hidden="!isCheckbox(type)">\n        <label class="weui_switch_checkbox_wrapper">\n          <span ref="checkbox" :class="[\'weui_switch_checkbox\',getCheckboxClass(checked)]">\n            <span class="weui_switch_checkbox_inner">\n            </span>\n            <input ref="checkboxInput" type="checkbox" class="weui_switch_checkbox_input" :checked="checked"  />\n          </span>\n        </label>\n      </span>\n    </div>\n  ',
    properties: {
        checked: {type: Boolean, value: !1, reflectToAttribute: !0,observer:"checkedChanged"},
        type: {type: String, value: "switch", reflectToAttribute: !0}
    },
    checkedChanged:function(v){
      this.checked2 = v;
    },
    data:{
        onekit_checked2:null
    },
    computed: {
        checked2: {
            get: function () {
                return this.onekit_checked2;
            },
            set: function (value) {
                this.onekit_checked2 = value;
            }
        }
    },
    behaviors: ["wx-base", "wx-label-target",  "wx-data-component"],
    listeners: {"switchInput.change": "onInputChange", "checkboxInput.change": "onInputChange"},
    handleLabelTap: function (e) {
       (this.checked2 = !this.checked2)
    },
    onInputChange: function (e) {

        return this.checked2 = !this.checked2,  void this.$emit("bindchange", {detail:{value: this.checked2}}, !0)
    },
    getCheckboxClass: function (e) {
        return e ? " weui_switch_checkboxchecked2" : ""
    },
    isSwitch: function (e) {
        return "switch" === e
    },
    isCheckbox: function (e) {
        return "checkbox" === e
    },
    getDisabledClass: function (e) {
        return e ? "weui_switch_disabled" : ""
    },
    getFormData: function () {
        return this.checked2
    },
    resetFormData: function () {
        this.checked2 = !1
    }
}), window.exparser.registerElement({
    is: "wx-text",
    template: '\n <span><span ref="raw" style="display:none;"><slot></slot></span>\n    <span ref="main"></span></span>\n  ',
    behaviors: ["wx-base"],
    _htmlEncode: function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;")
    },
    _contentChanged: function () {
        this.$refs.main.innerHTML = this._htmlEncode(this.$refs.raw.textContent).replace(/\n/g, "<br>")
    },
    attached: function () {
        this._contentChanged()
    },
    contentChanged: function () {
        this._contentChanged()
    }
}), window.exparser.registerElement({
    is: "wx-toast",
    template: '\n    <div class="wx-toast-mask" ref="mask" :style="_getMaskStyle(mask)"></div>\n    <div class="wx-toast">\n      <i :class="[\'wx-toast-icon\',\'wx-icon-\'+icon]" style="color:#FFFFFF;font-size:55px;display:block"></i>\n      <p class="wx-toast-content"><slot></slot></p>\n    </div>\n  ',
    behaviors: ["wx-base", "wx-mask-behavior"],
    properties: {
        icon: {type: String, value: "success_no_circle", reflectToAttribute: !0},
        hidden: {type: Boolean, value: !0, reflectToAttribute: !0, observer: "hiddenChange"},
        duration: {type: Number, value: 1500, reflectToAttribute: !0, observer: "durationChange"}
    },
    durationChange: function (e, t) {
        this.timer && (clearTimeout(this.timer), this.hiddenChange(this.hidden))

    },
    hiddenChange: function (e) {
        if (!e && 0 != this.duration) {
            let t = this;
            this.timer = setTimeout(function () {
                t.$emit("bindchange", {value: t.hidden}, !0)
            }, this.duration)
        }
    }
}), window.exparser.registerElement({
    is: "wx-video",
    behaviors: ["wx-base", "wx-player"],
    template: '<div><div class="container">\n    <video ref="player" webkit-playsinline style="display: none;"></video>\n    <div ref="default" class="bar" style="display: none;">\n      <div ref="button" :class="[\'button\',_buttonType]"></div>\n      <div class="time currenttime" parse-text-content>{{_currentTime}}</div>\n      <div ref="progress" class="progress">\n        <div ref="ball" class="ball" :style="{left: _progressLeft+\'px\'}">\n          <div class="inner"></div>\n        </div>\n        <div class="inner" :style="{width: _progressLength+\'px\'}"></div>\n      </div>\n      <div class="time duration" parse-text-content>{{_duration}}</div>\n      <div ref="fullscreen" class="fullscreen"></div>\n    </div>\n  </div>\n  <div ref="fakebutton"></div></div>',
    properties: {
        _videoId: {type: Number},
        _progressLeft: {type: Number, value: -22},
        _progressLength: {type: Number, value: 0}
    },
    _reset: function () {
        this._buttonType = "play", this._currentTime = "00:00", this._duration = "00:00", this._progressLeft = -22, this._progressLength = 0
    },
    update: function (e, t) {
        let n = this;
        e.videoPlayerId = this._videoId, e.hide = this.hidden, console.log(e), WeixinJSBridge.invoke("updateVideoPlayer", e, function (e) {
            /ok/.test(e.errMsg) ? console.log("视频组件: 更新" + t + "成功 " + e.errMsg) : n._publish("error", {errMsg: e.errMsg})
        })
    },
    _updatePosition: function () {
        this._isiOS() ? this.update({position: this._box}, "位置") : (this.$refs.player.width = this._box.width, this.$refs.player.height = this._box.height)
    },
    _hiddenChanged: function (e, t) {
        this._isiOS() ? (this.$el.style.display = e ? "none" : "", this.update({hide: e}, e ? "隐藏" : "显示")) : (this.$refs.player.pause(), this.$el.style.display = e ? "none" : "")
    },
    posterChanged: function (e, t) {
        if (!this._isError)return this._isReady ? void(this._isiOS() && (/http:\/\//.test(e) || /https:\/\//.test(e)) ? this.update({poster: e}, "封面") : this.$refs.player.poster = e) : void this._deferred.push({
            callback: "posterChanged",
            args: [e, t]
        })
    },
    srcChanged: function (e, t) {
        if (!this._isError && e) {
            if (!this._isReady)return void this._deferred.push({callback: "srcChanged", args: [e, t]});
            if (this._isiOS())console.log("视频组件: 当前环境 iphone"), /wxfile:\/\//.test(e) || /http:\/\//.test(e) || /https:\/\//.test(e) ? this.update({filePath: e}, "资源") : this._publish("error", {errMsg: "MEDIA_ERR_SRC_NOT_SUPPORT"}); else {
                console.log("视频组件: 当前环境 Android/开发者工具"), this.$refs.player.src = e, console.log(this.$refs.player.src);
                let n = this;
                setTimeout(function () {
                    n._reset()
                }, 0)
            }
        }
    },
    _computeProgress: function (e) {
        let t = this.$refs.progress.getBoundingClientRect().left, n = this.$refs.progress.offsetWidth, i = (e - t) / n;
        this.$refs.player.currentTime = this.$refs.player.duration * i
    },
    attached: function () {
        let e = this;
        this._isiOS() ? (console.log("视频组件: iOS 不显示默认控件"), this._box = this._getBox(), WeixinJSBridge.invoke("insertVideoPlayer", {
            position: this._box,
            hide: this.hidden
        }, function (t) {
            /ok/.test(t.errMsg) ? (e._videoId = t.videoPlayerId, e._ready(), document.addEventListener("pageReRender", e._pageReRenderCallback.bind(e))) : (e._isError = !0, e.$el.style.display = "none", e._publish("error", {errMsg: t.errMsg}))
        })) : this._isAndroid() ? (this.$refs.player.style.display = "", this.$refs.player.controls = !0, this._ready(), document.addEventListener("pageReRender", this._pageReRenderCallback.bind(this))) : (this.$refs.default.style.display = "", this.$refs.player.style.display = "", this.$refs.player.addEventListener("timeupdate", function (t) {
            t.stopPropagation();
            let n = e.$refs.player.currentTime / e.$refs.player.duration;
            e._progressLength = Math.floor(e.$refs.progress.offsetWidth * n), e._progressLeft = e._progressLength - 22
        }), this.$refs.button.onclick = function (t) {
            t.stopPropagation(), e.$refs.player[e._buttonType]()
        }, this.$refs.progress.onclick = function (t) {
            t.stopPropagation(), e._computeProgress(t.clientX)
        }, this._ready(), document.addEventListener("pageReRender", this._pageReRenderCallback.bind(this)))
    },
    detached: function () {
        this._isiOS() && wx.removeVideoPlayer({
            videoPLayerId: this._videoId, success: function (e) {
            }
        })
    }
}), window.exparser.registerElement({
    is: "wx-view",
    template: '<div><slot></slot></div>',
    behaviors: ["wx-base"],
    properties: {
        animation:{type:Object, reflectToAttribute: !0,observer:"animationChanged"},
        inline: {type: Boolean, reflectToAttribute: !0},
        scrollTop: {type: Number, observer: "_scrollTopChanged"},
        scrollLeft: {type: Number, observer: "_scrollLeftChanged"},
        scrollIntoView: {type: String, observer: "_srollIntoViewChanged"}
    },
    attached(){
},
    animationChanged:function(value) {
        if(!value || !value.actions || !(value.actions instanceof Array)){
            return;
        }
        let qView = $(this.$el);
        for(let a=0;a<value.actions.length;a++){
            let action = value.actions[a];
            let json = {};

            let transform = "";
            for(let i=0;i<action.animates.length;i++){
                let animate = action.animates[i];
                let args = animate.args;
                switch(animate.type) {
                    case "rotate":
                        transform+= ` rotate(${args[0]}deg)`;
                        break;
                    case "translation":
                        transform+= ` translate(${args[0]}px,${args[1]}px)`;
                        break;
                    case "translationX":
                        transform+= ` translateX(${args[0]}px)`;
                        break;
                    case "translationY":
                        transform+= ` translateY(${args[0]}px)`;
                        break;
                    case "scale":
                        transform+= ` scale(${args[0]},${args[1]})`;
                        break;
                    case "skew":
                        transform+= ` skewX(${args[0]}deg) skewY(${args[1]}deg)`;
                        break;
                    default:
                        json[animate.type] = args[0];
                        break;
                }
            }
            if(transform!==""){
                json["transform"] = transform;
            }
            qView.animate(json);
        }
    },
    _scrollTopChanged: function (e) {
        NaN !== Number(e) && (this.$el.scrollTop = e)
    },
    _scrollLeftChanged: function (e) {
        NaN !== Number(e) && (this.$el.scrollLeft = e)
    },
    _srollIntoViewChanged: function (e) {
        if (e) {
            let t = this.$el.querySelector("#" + e);
            t && (this.$el.scrollTop = t.offsetTop)
        }
    }
});

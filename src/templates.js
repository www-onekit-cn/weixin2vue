export function tempA() {
  return `
    <onekit-view>xxxx</onekit-view>
  `
}

export function tempB(data) {
  return `
    <div>
      <div>
        <onekit-text>${data.index}: ${data.msg}</onekit-text>
        <onekit-text>Time: ${data.time}</onekit-text>
      </div>
      <uc text='${data.time}'></uc>
    </div>  
  `
}
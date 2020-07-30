import UpdateManager from "./UpdateManager";
import OnekitWX_System from "./System"
export class OnekitWX_Update extends OnekitWX_System{
	static getUpdateManager(){
		return new UpdateManagerClass();
	}
}

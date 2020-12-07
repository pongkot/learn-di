import {ProfileModule} from "./modules/profile";

const result = ProfileModule.getInstance().service().getUserAProfile()

console.log(result)

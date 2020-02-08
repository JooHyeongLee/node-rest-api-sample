interface RouteType {
    path: String,
    method: String,
    handler: Array<any>
}

interface ReturnForm {
    result : Boolean,
    message: String,
    data?: any
}

export class BaseController {

    error(message: String):ReturnForm {
        return {
            result : false,
            message : message
        }
    }

    success(data?: any):ReturnForm {
        return {
            result : true,
            message : "OK",
            data: data
        }
    }
}
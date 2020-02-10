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

interface ChattingForm {
    id: string,
    message: string,
    channel: string
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

    sendMessage(data: any): ChattingForm {
        return {
            id: data.id,
            message: data.message,
            channel: data.channel
        }
    }
}
export function NotifyOnSuccess(notificationType:'Email'| 'Push'){
    return function(target:any, methodName:string, descriptor:PropertyDescriptor){
        let original = descriptor.value;

        descriptor.value = function(...args:any[]){
            let result = original.apply(this,args)

            if(typeof result === "string" && !result.startsWith('ERROR')){
                return `"[NOTIFY] Sending ${notificationType} notification for successful action "${methodName}".`
            }
            return descriptor
        }
    }
}
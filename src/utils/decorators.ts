export function LogCreate(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`\n[LOG] Létrehozás: ${propertyKey}`, args[0]);
        return original.apply(this, args);
    };

    return descriptor;
}

export function LogChange(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`\n[LOG] Módosítás: ${propertyKey}`, args);
        return original.apply(this, args);
    };

    return descriptor;
}

class MockWeatherDataService {

    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string) {
        this.weatherData.push(data);
    }

    @cache()
    getWeatherData() {
        return this.weatherData;
    }
}

function cache() {
    interface Cache {
        lastChecked: Date | undefined,
        data: string[];
    }

    let cache: Cache = {
        lastChecked: undefined,
        data: []
    };

    return function (
        target: any,
        methodName: string,
        descriptor: PropertyDescriptor
    ) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {

            const now = new Date();

            if (
                cache.lastChecked &&
                now.getTime() - cache.lastChecked.getTime() < 5000
            ) {
                console.log("Returned from cache");
                return cache.data;
            }

            const fresh = original.apply(this, args);
            cache.lastChecked = new Date();
            cache.data = [...fresh];

            return fresh;
        };

        return descriptor;
    };
}

let service = new MockWeatherDataService();

console.log(service.getWeatherData());   // fresh
console.log(service.getWeatherData());   // from cache

service.addWeatherData('Partially Cloudy 5° to 11°');

console.log(service.getWeatherData());   // from cache (still within 5 sec)

setTimeout(() => console.log(service.getWeatherData()), 7000); // fresh after 7 sec

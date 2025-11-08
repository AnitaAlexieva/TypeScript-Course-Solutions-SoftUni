interface CarBody {
    material:string;
    state:string;
}

interface Tires {
    airPressure : number;
    condition : string;
}

interface Engine {
    horsepower : number;
    oilDensity : number;
}

interface AddedProperties {
    partName : string;
    runDiagnostics() : string;
}

function carDiagnostics(
    carBody: CarBody & AddedProperties,
    tires: Tires & AddedProperties,
    engine: Engine & AddedProperties
){
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}   

function runDiagnostics( this:{partName : string}){
    return this.partName
}

carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },

{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },

{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics })
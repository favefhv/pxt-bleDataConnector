/**
* makecode Bluetooth Low Energy Data Connector Package.
* created by: Verena Fastenbauer
*/

// enums to choose alarm number etc - these must be outside the namespace!
enum testEnum {
    A1,
    A2
}

/**
 * Bluetooth block
 */
//% weight=20 color=#b77ff0 icon="\uf017" block="BLE Test"
namespace SmartfeldBLE {    
    
    /**
     * gets info
     */
    export function getInfo() {
        return "info"
    }
}
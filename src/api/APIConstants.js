class APIConstants {
    static BASE_URL = '/api/'

    // Logic
    static LOGIC_BASE_URL = APIConstants.BASE_URL + "logic/"
    static CONVERTER_ENABLED = APIConstants.LOGIC_BASE_URL + "converterEnabled"
    static ENABLE_CONVERTER = APIConstants.LOGIC_BASE_URL + "enableConverter"

    static INVERTER_DATA =  APIConstants.LOGIC_BASE_URL + "inverterData"
    static INVERTER_SWITCH = APIConstants.LOGIC_BASE_URL + "inverterSwitch"
    static INVERTER_STATUS = APIConstants.LOGIC_BASE_URL + "inverterStatus"
    static RANDOM_DATA1 = APIConstants.LOGIC_BASE_URL + "randomDataStream1"
    static RANDOM_DATA2 = APIConstants.LOGIC_BASE_URL + "randomDataStream2"
    static BATTERY_DATA=  APIConstants.LOGIC_BASE_URL + "batteryData"
    static GET_TIME =  APIConstants.LOGIC_BASE_URL + "getTime"
    static STREAM_VOLTAGE =  APIConstants.LOGIC_BASE_URL + "streamVoltage"
    static STREAM_CURRENT0 =  APIConstants.LOGIC_BASE_URL + "streamCurrent0"
    static STREAM_CURRENT1 =  APIConstants.LOGIC_BASE_URL + "streamCurrent1"
    static ENABLE_CHARGE = APIConstants.LOGIC_BASE_URL +  "enableCharge"
    static CHARGE_ENABLED = APIConstants.LOGIC_BASE_URL +  "chargeEnabled"
    static ENABLE_DISCHARGE = APIConstants.LOGIC_BASE_URL +  "enableDischarge"
    static DISCHARGE_ENABLED = APIConstants.LOGIC_BASE_URL +  "dischargeEnabled"
    static ENABLE_LOGBMS = APIConstants.LOGIC_BASE_URL +  "enableLogBMS"
    static LOGBMS_ENABLED = APIConstants.LOGIC_BASE_URL +  "logBMSEnabled"


}

export default APIConstants


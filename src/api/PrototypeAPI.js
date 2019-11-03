import Axios from 'axios'
import APIConstants from './APIConstants'


class PrototypeAPI{

    // inverter and converter
    inverterData = async() => {
        return (await Axios.get(APIConstants.INVERTER_DATA)).data.result
    }

    isConverterEnabled = async () => {
        return (await Axios.get(APIConstants.CONVERTER_ENABLED)).data.result
    }
    enableConverter = (enable) => {
        return Axios.post(APIConstants.ENABLE_CONVERTER, {enable})
    }
    inverterStatus = async() => {
    	return (await Axios.get(APIConstants.INVERTER_STATUS)).data.result
    }
    inverterSwitch = (enable) => {
    	return Axios.post(APIConstants.INVERTER_SWITCH, {enable})
    }
    randomDataStream1 = async() => {
        return (await Axios.get(APIConstants.RANDOM_DATA1)).data.result
    }
    randomDataStream2 = async() => {
        return (await Axios.get(APIConstants.RANDOM_DATA2)).data.result
    }
    // Battery

    batteryData = async() => {
        return (await Axios.get(APIConstants.BATTERY_DATA)).data.result
    }


    getTime = async() => {
        return (await Axios.get(APIConstants.GET_TIME)).data.result
    }

    streamVoltage = async() => {
        return (await Axios.get(APIConstants.STREAM_VOLTAGE)).data.result
    }

    streamCurrent0 = async() => {
        return (await Axios.get(APIConstants.STREAM_CURRENT0)).data.result
    }
    streamCurrent1 = async() => {
        return (await Axios.get(APIConstants.STREAM_CURRENT1)).data.result
    }


    enableCharge = async(enable) => {
        return Axios.post(APIConstants.ENABLE_CHARGE, {enable})
    }


    chargeEnabled = async() => {
        return (await Axios.get(APIConstants.CHARGE_ENABLED)).data.result
    }
    enableDischarge = async(enable) => {
        return Axios.post(APIConstants.ENABLE_DISCHARGE, {enable})
    }
    dischargeEnabled = async() => {
        return (await Axios.get(APIConstants.DISCHARGE_ENABLED)).data.result
    }

    enableLogBMS= async(enable) => {
        return Axios.post(APIConstants.ENABLE_LOGBMS, {enable})
    }


   logBMSEnabled = async() => {
        return (await Axios.get(APIConstants.LOGBMS_ENABLED)).data.result
    }


}

export default PrototypeAPI


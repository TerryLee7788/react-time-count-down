const common = {
    getDays: (num) => {
        return common.getTwoBytesOfNumber(Math.floor(num / 86400)).toString();
    },

    getHours: (num) => {
        return common.getTwoBytesOfNumber((Math.floor(num / 3600) % 24)).toString();
    },

    getMinutes: (num) => {
        return common.getTwoBytesOfNumber((Math.floor(num / 60) % 60)).toString();
    },

    getSeconds: (num) => {
        return common.getTwoBytesOfNumber(Math.floor(num % 60)).toString();
    },

    getTwoBytesOfNumber: (num) => {
        num = Number(num);
        return num < 10 ? "0" + num : num;
    },

};

export default common;

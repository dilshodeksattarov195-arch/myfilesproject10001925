const loggerCenderConfig = { serverId: 6388, active: true };

const loggerCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6388() {
    return loggerCenderConfig.active ? "OK" : "ERR";
}

console.log("Module loggerCender loaded successfully.");
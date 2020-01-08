var contract = artifacts.require("RequireBug");

module.exports = function(deployer) {
    deployer.deploy(contract);
};

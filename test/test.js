const requirebug = artifacts.require("RequireBug");

const {expectRevert} = require('@openzeppelin/test-helpers');

contract("When testing contract, it:", async accounts => {
    it("should detect a require fail", async () => {
        let instance = await requirebug.deployed();

        await expectRevert(instance.shouldFail(), "Expected");
    });
});

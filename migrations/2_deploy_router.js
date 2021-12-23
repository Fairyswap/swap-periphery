const fairyRouter = artifacts.require('FairyRouter');

// ++++++++++++++++  Main Migration ++++++++++++++++ 
const migration = async (deployer, network, accounts) => {
  await Promise.all([
      deploy(deployer, network, accounts)
  ]);
}

// ++++++++++++++++  Deploy Functions ++++++++++++++++ 
module.exports = migration;

async function deploy(deployer, network, accounts) { 
  console.log("[Periphery] Start deploy on Network= " + network);

  let deployer_account = accounts[0];

  console.log("[Periphery] Begin to deploy FairyRouter")
  await deployer.deploy(fairyRouter, '0x335D4703Df146dCcaC4927367E470871b71D1514');

  console.log("[Periphery] End");
}
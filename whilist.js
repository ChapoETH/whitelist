<!DOCTYPE html>
<html>
  <head>
    <title>WhiteListing</title>
        <style>
      .wl-body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60vh;
      }
      .purple-font {
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div id="wl" class="wl-body">
      <div class="max-w-600 p-5">
        <div class="h-full">
          <div class="text-center">
            <h1 class="text-white text-4xl md:text-5xl font-extrabold my-5 purple-font">LuckyList Checker</h1>
            <p class="text-white text-2xl my-5 purple-font">Enter a wallet address to check if its on the Luckylist:</p>
            <input
              id="walletInput"
              type="text"
              fullWidth
              class="bg-blue-300 rounded-5px my-5 "
            />
            <button
              onclick="checkWallet()"
              class="bg-blue-500 py-2 px-10 text-xl font-bold rounded-5px hover:bg-blue-900 mb-3 mx-2 mt-12"
            >
              Check
            </button>
            <div id="connectWallet"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script>
    function checkWallet() {
      const whitelist = [
      "0x24264bC0215DD8FE4871feA2B420A1B243Dc7B36",
      "0x956fe1D9d9751f880348bE3c59d9A35dA9C8989B",
      "0x06A34b9CAB3CFAa1538F93b6ece717260b75FE2D",
      "0x379b41321F066b1E89d4011c537C5326C913f0bF",
      "0x938c99E0025A526239a1bE2EEA36f0BC897b8f78",
      "0x3b19104eaC45E8700ea41E1c31B781F428966e18",
      "0x291D9764D9A620E6a2FC8C07125e1FbFb2F6A557",
      "0xA1C8D5B48d8afB8Aa12EE6558b3549B1ebC036CF",
      "0xE7e369Ed75b487deDFe1E2a5BbF1B3a9B1d7904c",
      "0xb11a9DE71426a4D598749741459f7661732E757D",
      "0xfef9b95c92F44DBfA407bD9C5EfbcB09af3b65D6",
      "0xE063C31DaBF262AAaF4Ee9af35e12e9FD2Fd4cED",
      "0xa67436f622002496cbf68eb25192e61c2b59101c",
      "0x6CfAea58b93dfC4D17B291A80dac337a03B30af2",
      "0x48AD42667Cd9984A5eb10268d2e94449EeB928f9",
      "0x9941241fB469024a5CC9cb94dB1E5866a70694b9",
      "0x5E7DeC5eCcB1d1d94a222155F862Cf2280755963",
      "0x4c7d1c5D26DF4885C8BAd1E1aEF6D0Ac4A47143B",
      "0xC8c41eFAFA579b8459549ED55568e50BDc198Cc2",
      "0x99244FD465d24dd233a0a067c23440B629b552Dc",
      "0xF9f8BA916D955F92EE906BC24145C0563300E4f3",
      "0xed0C869caC189B54306b91775B9a1f5641F0a64f",
      "0x863Ee99F3f20903929661Ef61a908ca9C6b5f30E",
      "0x40F0191E685975A0190a9241AC6089A7c0f82428",
      "0x0f7b4371d7F93289eC6db0ff77Fd5de2e75d6568",
      "0x57a66a658D7d206aCAB5844dD061E7C5390ba5D6",
      "0x868B2e36c8762a9475D750255283df76A1855eaD",
      "0x2d8888DCaF2E490c72c5bEc3a22A237cD79FC0FC",
      "0x6915Fc3CF4a1E5836Ab5FD83a1a15d61b6EA4D2c",
      "0x53965cd7992BC61b4807Aa7aCe3Bec0062c90dE2",
      "0xfE271cb47c0faCeB6B9bd73b7405cFF8bbD2fA91",
      "0x6d1d65BAEa5410E2b3FE43BAA45b1Eb67B309374",
      "0x4A274c476c759eBC1f6E232B9D344aaA72dFF16C",
      "0x60c93E104b7fCA80976857d02E2e1bcEc88d2699",
      "0x1d7a791640f8d74cE34F7e47Cb495fEca6B9780d",
      "0x12ec6ea683a9c115daa52dbc12860a8ac405dad3",
      "0xc7C4b648974752b67F27c106A9B82707bB5b8846",
      "0x6a0Ad5aA3D3611415c2a97c21aFc78ae1fA1dB4B",
      "0x5879e6ACbB6B99358B5Ce023F7113bDfA4269b63",
      "0x23BDE0428bab170dA961660CD26404cB455226d1",
      "0xA4C43b64547FEfd0b5D39139a042289F2Ffc0F44",
      "0xB9d457cB89c8c6a1cC2D0C5f4F359C636eB41CF3",
      "0x11B6A0DaBc9d08D5903B6Fd889C0578c63617a1d",
      "0x22CAA780a45Ed095a1377Fee831309E66Ab026dA",
      "0x5a4F05B09BB90a54E0579A0f19Ab38dE15284A8b",
      "0x1aF32c58b0a6289bb1B68C39C02e1A9EB4B0c51A",
      "0x1D6d5C7E7cEb6533C531A0684Ef07D2ee4580e5D",
      "0x0685560236cFf0854a6AFD33830FDeF17448C1B3",
      "0xe1280Fa6B91b2C3320bcEeC7fcB47846fBd7Ddea",
      "0xFFE524a3715595A4586c5406586Fb9f35A926798",
      "0x0E2ce3C625Ca5ceb3EBe8D834e0980822415c35B",
      "0xa30a01C6339EA5f2a135A0219cA68e9Cd8Ea95BD",
      "0xbEBDBf56Ee7f59cf3a27E056Aad0D8c653A19a64",
      "0x71fF48D1e9Bb741E5708c6bb3ED8c583C2Dc16ab",
      "0xD8734BD43c77FD71C31118468dab5d9255622F15",
      "0x4A565931BAFFA6306dBb7A5abc7a16b29fB88611",
      "0x775BF864087e10FE0722F0e028c9f943d3fa62e9",
      "0xff30802eC9405508254C810F4786b354290d081a",
      "0xd76dC79120DaEb9c511E88d4628928E9B3ad2665",
      "0x319f698f40943C17c3af40aa22927363631a3f27",
      "0x27dC9DD39502DC16cC410CE6e3370017cdF7a549",
      "0xf2CF43dE30c4Ccd32155117d28fE6776A6CC705b",
      "0x45BCA5B4A9F24c468201505b2b7C210A1AC311f6",
      "0x47c33803555ef29aA65b735F099293676f4cC11b",
      "0xC4D3511822758BEde1266f2255dba32d7BcEA543",
      "0x51f4352F697eC5efEd00a2Dd94453F5494728ECc",
      "0x3385573764EA75108cfcE2633a251A5AEe4fFe36",
      "0x4B259aa502499c924C011A5ba335E15E294Bb9A3",
      "0xe481bcf528C6Bd442A52Fcc9d25Af9DB1cFF732a",
      "0x0985a63dCd45692077cB13A34ff61083a63674c9",
      "0xadd4b891f0ce17454dd6f70bf00a1694b9368991",
      "0x6348CAbeAA2c5cf09867e019Ce4059a6e5058A47",
      "0x91954Fbe17c983Bb853f8A84AaE2106E48b3d6f6",
      "0x14F8F6F3dDa930d5D9BE0e72059bCC2213997cDe",
      "0x413CE0437d6f643a641C5ee7aa1531d340CD45bd",
      "0x835B4485955ba8046231275318b579a1165cee2d",
      "0x21445e310f29d680369d8dd5070ed7cda5102767",
      "0xF61b07d47d8f7ea17dC23a353f4D461bECa8155E",
      "0x1b5bC95DE5c080B4E36DCb1C9F2c7D36C1f01046",
      "0xE5710B73E06d80F00f987330a14112b0A9eA6809",
      "0x000d8488A83C183b16de6adA1C0FCe38d4b6B1fc",
      "0xDb396122773278d40A4Fd8F774fBf8befeD1a636",
      "0x88DeFfF9456Cef9E5f6376Bd90D1F6A297498035",
      "0xcbA3d9D6Df166F2C2D5b010C60081BD81109eFd6",
      "0x3A4CDBa6d81C702a592F7683963A87f12cb946F1",
      "0x4122B230b5678Db0De7433F96863bB722682c0B3",
      "0xb4FFc652b04756D2EC0055d7C04C234e10356D4D",
      "0xadd8db82416cc78411e5fd18725ebdae6db14cbc",
      "0x3c6Cbfa781ADd9ECf1c45663e1180A19bc32C66c",
      "0xAb7BCf95C885638E3EAb1cc7b8D83BdecA86bC91",
      "0x58Ea38B2C508723a27CB1317456462064435842E",
      "0x400BCb08aedA22862577Ca2BD23c91aF78a1ee6B",
      "0xf7f5d603c0395177f808834a562ec349548e4138",
      "0xbb31C2a1A6e182Ab07bC1fB10c91BACDDc323E99",
      "0xC3eE603020B23D7B4a9E94f8E90EA4F10Ce42662",
      "0xC407e8De4A077AC0F05901F59C20c5a04c564197",
      "0x28628c773B8491E95A06dC06983f28b2Fe68c781",
      "0x305E5c4D5b726209091E6eBE048ad2f7eAe15b54",
      "0x657Da42040aFE71eF374ab02C66cf28CF30ef4b4",
      "0xFB8e795A2b5824bDeBC4857f4E6a663d8cBFEB18",
      "0x12f4d99a7249E194a0b7990a3db41546cC1b1A7c",
      "0xDb396122773278d40A4Fd8F774fBf8befeD1a636",
      "0xE2F44A7A5B8f49E120e1D3f9E937bc66a2bdeF15",
      "0x9e24D92324E73f1bc2ed22bBA456840959db1D24",
      "0xF7d76Cb946a8f353e26Edb53e72F85Ca71810d58",
      "0x3A4CDBa6d81C702a592F7683963A87f12cb946F1",
      "0x6E5be0076e623Fa09e00491d2dC5ec73e3d46716",
      "0xb23190aaec1050c2d85c4f8cfbd09d2b45c5a1dd",
      "0x97FA956a03EB7c481a24A1b81F8D629D34ac735F",
      "0x8b7D12B2Aed991eF314CAff9a68228eA6aDf1C65",
      "0xc727242e449df721AdcfBA6053324A8bf5F3376e",
      "0x7e3cE3Ad2Ffc04343a9cEbc726b4131b60c2927a",
      "0xa14d4242A42Aa1995A2c0fb2bf96fDf15f4759ab",
      "0x711741AE6e6E4Ee7Abbc02212B141E963B314185",
      "0x137f83301E3C4FdA426201eEB0a1E6f50d2069dA",
      "0x6484ed8f4AC2b8d83C7bd77fc710aBd3622f3bb5",
      "0xC6Fb973590A5D1eCd0254deCDDC30F485E29028B",
      "0x5491Ff4696FB0b5Fe5B2ddC12C9FEaDe724C7Fe6",
      "0xdfCc81e69498D18C4334dB73999e146716d8c335",
      "0x5f9a558f7b56DD0FeEe44ee7fcA60450FCA048DA",
      "0xf74E5dc9482B6f7673233FECe7e6Fe107860ae00",
      "0x431855F65f7d3dfD05a55bB585f072599f1dd4D6",
      "0x105Dc7521c7806059c854706bb278a1b8bc82212",
      "0x27B3403d631bB52f5A8c14DBd495e87783B38da2",
      "0x2924fE534acC4e7fe364e21166619a18AD18C056",
      "0x105Dc7521c7806059c854706bb278a1b8bc82212",
      "0xb0E97fEc7f426EE7bD80266d7E19B6a0D0475365",
      "0x476bFF1806763b2F27eb30aCcD9EdDBd496FcA3f",
      "0xE6ED9476FB170283107a674084c32Bc13C4d18A5",
      "0xb3C587176E9eB269a1DCD185a0864c4eA84c9951",
      "0x3089f10484D68B91bb4c2EBA84ec94e6E2F445f6",
      "0x7A96510CBDD0809D9e2d3166Bc9e50EEefb894d3",
      "0x91e9E4Be217520aC7f66F7ecD981929157047c52",
      "0x48654e23E99a531eFb574A4ecAf8B55d0D653969",
 			"0x4e71fc7c6174fcab3d7b79d1f07ec6263cc3ef7c",
			"0x001bF00A08D4Fc5D6d91246189Db293F2043ba4E",
      "0x0d1F06C0751D7398070615ff5fdD9BB23BAEad79",
      "0xCA38f7fbFa3dC99F2693412f721bfB3Fc9B85857",
			"0x5100c125CF338F65Cf51C0B12DDf170a5a213fD8",
			"0x641ABc729Da2B02a96CA6ea4890Ac124d65E154b",
			"0xF1e680DE870dFBDfa9bBBe888cC6fBA398f15212",
			"0xbA2DC97bBf3b2A00BE4c39C6A3E0b7A3ea15639F",
			"0x46033f1b2dF33C2148764344cC03410658008B00",
			"0xf88025d36f71d571892cb4DCe3b2D489FC4152EB",
			"0x56eB5ca95368dCA1B4e15C34a0FC8D3C5889B936",
			"0x56eB5ca95368dCA1B4e15C34a0FC8D3C5889B936",
			"0x3Fd1E48C4F585F934Cc2e8CaBf2C14eACeA4F7D1",
			"0x19Db15d9308216B1E5cC5462123c4097cef9CcCb",
			"0x32417DC69162e493CAE4648E6919e468b28a2F56",
			"0xBA2f4b3587B92211833e0df81fBEe87C389F1020",
			"0xE4796EA5077fdFa78Da5f1176c2B9276259adB57",
			"0xebE7E229783dC3fadfa4dD8b2e3C42e5E9180337",
			"0x5B33ea8B7836FF4D14C75F0d461Fc67a23D777F0",
			"0xA6b67C89DB132f47a22c5c42f399A443C710d5A4",
			"0x4c7d1c5D26DF4885C8BAd1E1aEF6D0Ac4A47143B",
			"0x38276A7A400ccA803986E99F023166dFE6c2C492"
      ];

      const wallet = document.getElementById("walletInput").value;

      if (wallet && wallet.startsWith("0x") && wallet.length === 42) {
        const lowercaseWallet = wallet.toLowerCase();
        const lowercaseWhitelist = whitelist.map((address) => address.toLowerCase());
        if (lowercaseWhitelist.includes(lowercaseWallet)) {
          alert("The wallet entered is on LuckyList!");
        } else {
          alert("Sorry The wallet entered is not on LuckyList!");
        }
      } else {
        alert("Error: Invalid Format. Please enter a valid wallet address starting with 0x and containing 42 letters and numbers.");
      }
    }
  </script>
</html>
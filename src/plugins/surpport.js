import {SupportProvider} from '@yeying-community/yeying-next'
// import {Authenticate} from "../../../src/provider/common/authenticate";
// import {SupportProvider} from "../../../src/provider/support/support";
// import {getBlockAddress, getProvider} from "../common/common";
// import {ProviderOption} from "../../../src/provider/common/model";
// import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";



// describe('Support', () => {
//     it('faq', async () => {
//         const supportProvider = new SupportProvider(new Authenticate(blockAddress), provider)
//         await supportProvider.collectFaq("feature", 'test@gmail.com', "for test.")
//         console.log(`Success to collect faq=${blockAddress.identifier}`)
//     })
// })
class $surpport {
  constructor() {
    // const blockAddress = getBlockAddress()
    // const provider = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)
    // this.manager = new SupportProvider(new Authenticate(blockAddress), provider)
    this.manager = null
    // console.log("account:",this.manager)
  }
  
  // 联系我们
  async handleContact(form) {
    console.log("collect faq data:", form)
    const info = await this.manager.collectFaq(form.pro_type, form.email, form.describe)
    console.log(`Success to collect faq=${blockAddress.identifier}`)
    return info
  }
}
export default new $surpport()
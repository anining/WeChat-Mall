// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();
const db = cloud.database();

//云函数入口函数
exports.main = async(event, context) => {
  const {
    OPENID,
    APPID,
    UNIONID
  } = cloud.getWXContext()
  try {
    return await db.collection('trolley').add({
      data: {
        _id:event._id,
        count: 1,
        image: event.image,
        name: event.name,
        price: event.price,
        user_openid: OPENID
      }
    })
  } catch (e) {
    console.log(e)
  }
}
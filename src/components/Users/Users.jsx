import React from 'react';
import style from "./Users.module.css";

let Users = (props) => {
  //debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        photoUrl: 'https://inde.io/i/posts/33099/e78d8b0d8f4650e25bee66beb2d19d55.jpg',
        fullName: 'Dmitry',
        status: 'I am your teacher',
        location: {
          city: 'Minsk',
          country: 'Belarus',
        },
      },
      {
        id: 2,
        followed: true,
        photoUrl: 'https://lapkins.ru/upload/iblock/8e1/8e1e146de3f6acdc6741bd8960b87e30.jpg',
        fullName: 'Evgeniy',
        status: 'I am a programmer',
        location: {
          city: 'Kharkov',
          country: 'Ukraine',
        },
      },
      {
        id: 3,
        followed: false,
        photoUrl: 'https://icdn.lenta.ru/images/2019/03/07/16/20190307162142410/square_1280_ab600dead2d06b6022bd40dffdfe4556.jpg',
        fullName: 'Anton',
        status: 'I am a programmer',
        location: {
          city: 'Moscow',
          country: 'Russia',
        }
      }
    ])
    // props.users.length = 3;
  }
  console.log(props.users.length)
  //debugger;
  return <div>
    <h1 className="title">Users</h1>
    <div className={style.users_list}>
      {
        props.users.map(u => <div className={"users_item"} key={u.id}>

          <div className="users_item_col v1_mod">
            <div className="users_item_photo">
              <img src={u.photoUrl} alt="" className="users_item_photo_img" />
            </div>
            <div className="users_follow_btn_w">
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }} className="users_follow_btn">Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }} className="users_follow_btn">Follow</button>}
            </div>
          </div>
          <div className="users_item_col v2_mod">
            <div className="users_item_info">
              <div className="users_item_name">
                {u.fullName}
              </div>
              <div className="users_item_location">
                {u.location.city},<br />
                {u.location.country}
              </div>
              <div className="users_item_status">
                {u.status}
              </div>

            </div>
          </div>
        </div>
        )
      }
    </div>
  </div>
}

export default Users;
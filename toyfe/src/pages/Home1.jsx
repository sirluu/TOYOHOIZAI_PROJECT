import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { login, setLogingLoading } from '../store/actions/userActions'
import { useHistory } from 'react-router-dom'

import loading from '../assets/imgs/loading-gif.gif'
import "../assets/css/home.css";

export const Home = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [creds, setCreds] = useState({
    username: 'hunglq',
    password: '123',
  })

  const [msg, setMsg] = useState('')

  const { isLogingLoading } = useSelector((state) => state.userModule)

  const showMsg = (txt) => {
    setMsg(txt)
    setTimeout(() => setMsg(''), 3000)
  }

  const handleChange = async ({ target }) => {
    const field = target.name
    let value = target.type === 'number' ? +target.value || '' : target.value
    setCreds((prevCred) => ({ ...prevCred, [field]: value }))
  }

  const doLogin = () => {
    dispatch(setLogingLoading(true))
    dispatch(login(creds))
      .then((savedUser) => {
        setCreds(() => ({ username: '', password: '' }))
        props.history.push('/main/feed')
        dispatch(setLogingLoading(false))
      })
      .catch((err) => {
        dispatch(setLogingLoading(false))
        showMsg('Something went wrong...')
        console.log(err)
      })
  }

  return (
  

      <div className="box">
        <div className="rectangle">
          <div className="screen">
            <div className="overlap-group">
              <div className="text-wrapper">TOYOHOZAI</div>
              <div className="overlap">
                <div className="email-mobile-number">メールアドレス</div>
              </div>
              <div className="email-mobile-number-wrapper">
                <div className="div">会員登録せずに利用する</div>
              </div>
              <div className="div-wrapper">
                <div className="email-mobile-number-2">サインイン</div>
              </div>
              <div className="email-mobile-number-3">ID</div>
              <div className="overlap-2">
                <div className="email-mobile-number">PASSWORD</div>
              </div>
              <div className="email-mobile-number-4">パスワード</div>
              <div className="welcome-to-community">サインイン</div>
              <div className="welcome-to-community-2">または</div>
              <p className="p">
                <span className="span">パスワードをお忘れの方は</span>
                <span className="text-wrapper-2">
                  こちら
                  <br />
                </span>
                <span className="span">アカウントをお持ちでない方は</span>
                <span className="text-wrapper-2">
                  会員登録
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-3">
                  ※新規登録後、審査をさせていただきます。
                  <br />
                  審査完了までお時間をいただく場合がございます。
                  <br />
                  ご了承ください。
                </span>
              </p>
              <img className="line" alt="Line" src="line-12.svg" />
              <img className="img" alt="Line" src="line-13.svg" />
            </div>
          </div>

        </div>
      </div>


 
  )
}

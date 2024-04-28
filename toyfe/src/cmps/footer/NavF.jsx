import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const NavF = () => {
  const { currPage } = useSelector((state) => state.postModule)

  const { loggedInUser } = useSelector((state) => state.userModule)
  const { unreadActivities } = useSelector((state) => state.activityModule)
  const { unreadMessages } = useSelector((state) => state.activityModule)

  return (
    <nav className="navf">
      <ul>
        <li
          className={'home' + ' ' + (currPage === 'home' ? 'current-btn' : '')}
        >
          <Link to="/main/feed">
            <p>
              <FontAwesomeIcon
                className={
                  'nav-icon' + ' ' + (currPage === 'home' ? 'curr-logo' : '')
                }
                icon="fas fa-home-lg-alt"
              />
              <span>ホーム</span>
            </p>
          </Link>
        </li>

        <li className={'map' + ' ' + (currPage === 'map' ? 'current-btn' : '')}>
          <Link to="/main/map">
            <p>
              <FontAwesomeIcon
                className={
                  'nav-icon' + ' ' + (currPage === 'map' ? 'curr-logo' : '')
                }
                icon="fa-solid fa-search"
              />

              <span>検索</span>
            </p>
          </Link>
        </li>


        {/* <li
          className={
            'mynetwork' + ' ' + (currPage === 'mynetwork' ? 'current-btn' : '')
          }
        >
          <Link to={`/main/mynetwork`}>
            <p>
              <FontAwesomeIcon
                className={
                  'floating-icon fab' +
                  ' ' +
                  (currPage === 'mynetwork' ? 'curr-logo' : '')
                }
                icon="fa-phone"
              />
              <span className={'fab-text'}>東洋舗材</span>
            </p>
          </Link>
        </li> */}

        <li
          className={
            'me-btn' + ' ' + (currPage === 'mynetwork' ? 'current-btn' : '')
          }
        >
          <Link to={`/main/mynetwork/${loggedInUser?._id}`}>
            <p>
              <span>
                <img
                  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsj5XanhdLcb-7r5fnwyf9LgBwIkClHI2wjg71cfVF23jmkvr'}
                  alt="hello"
                  className="image-icon"
                />
              </span>
              <span className={'fab-text'}>東洋舗材</span>
            </p>
          </Link>
        </li>


        <li
          className={
            'notifications' +
            ' ' +
            (currPage === 'notifications' ? 'current-btn' : '')
          }
        >
          <Link to={`/main/notifications`}>
            <p>
              <FontAwesomeIcon
                className={
                  'nav-icon' +
                  ' ' +
                  (currPage === 'notifications' ? 'curr-logo' : '')
                }
                icon="fas fa-list"
              />
              <span>検索履歴</span>
              {unreadActivities?.length > 0 && (
                <span className="number">{unreadActivities?.length}</span>
              )}
            </p>
          </Link>
        </li>
        <li
          className={
            'me-btn' + ' ' + (currPage === 'profile' ? 'current-btn' : '')
          }
        >
          <Link to={`/main/profile/${loggedInUser?._id}`}>
            <p>
              <span>
                <img
                  src={loggedInUser?.imgUrl}
                  alt=""
                  className="profile-icon"
                />
              </span>
              <span className="txt">設定</span>
            </p>
          </Link>
        </li>

      </ul>
    </nav>
  )
}

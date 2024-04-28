import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { InputFilter } from './InputFilter'

export const Nav = () => {
  const { currPage } = useSelector((state) => state.postModule)

  const { loggedInUser } = useSelector((state) => state.userModule)
  const { unreadActivities } = useSelector((state) => state.activityModule)
  const { unreadMessages } = useSelector((state) => state.activityModule)

  return (
    <p>
      <nav>
        <ul>
          <InputFilter />
        </ul>
      </nav>
      <nav className="nav">
        <ul>
          <li className={'map' + ' ' + (currPage === 'map' ? 'current-btn' : '')}>
            <Link to="/main/map">
              <p>
                <span>Map</span>
              </p>
            </Link>
          </li>
          <li
            className={
              'mynetwork' + ' ' + (currPage === 'mynetwork' ? 'current-btn' : '')
            }
          >
            <Link to={`/main/mynetwork`}>
              <p>
                <span>My Network</span>
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </p>
  )
}

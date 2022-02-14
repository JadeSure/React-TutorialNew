import React from 'react'
import { connect, useSelector } from 'react-redux'
import { loadRepos, loadEmojies } from '../actions'

// const Dashboard = () => {
//     const { countRepos, countEmojis } = useSelector(state => {

//         return {
//             countEmojis: Object.keys(state.emojies.emojies).length,
//             countRepos: state.repos.repos.length
//         }
//     })
//     return (
//         <>
//             <h1>repos count {countRepos}</h1>
//             <h1>emojis count {countEmojis}</h1>
//         </>
//     )

// }

// export default Dashboard


class Dashboard extends React.Component {
    componentDidMount() {
        const { repos, emojies, loadEmojies, loadRepos } = this.props
        if (!Object.keys(emojies).length) {
            loadEmojies()
        }

        if (!repos.length) {
            loadRepos()
        }
    }
    render() {
        return (
            <>
                <h1>repos count {this.props.countRepos}</h1>
                <h1>emojis count {this.props.countEmojis}</h1>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countEmojis: Object.keys(state.emojies.emojies).length,
        countRepos: state.repos.repos.length,
        emojies: state.emojies.emojies,
        repos: state.repos.repos
    }
}

const mapActionToProps = {
    loadRepos,
    loadEmojies
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard)
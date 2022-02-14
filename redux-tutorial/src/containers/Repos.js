import { connect } from 'react-redux'
import React from 'react'
import { loadRepos } from '../actions'
import { Route, Link, Routes, Outlet } from 'react-router-dom'
import Repo from '../components/Repo'

class Repos extends React.Component {
    componentDidMount() {
        const { loadRepos } = this.props
        loadRepos()
    }

    render() {
        const { loading, repos } = this.props
        if (loading) return <h1>Loading...</h1>

        return (
            <>
                <ul>
                    {repos.map(repo => {
                        return (
                            <li key={repo.id}>
                                {console.log(repo, "====")}
                                {/* <Link to='' >{repo.name}</Link> */}
                                <Link to={`${repo.name}`}>  {repo.name}</Link>

                            </li>
                        )
                    })}
                </ul>
                <Outlet />
                {/* <Routes>

                </Routes> */}
                {/* <Repo /> */}

            </>
        )

    }
}

const mapStateToProps = (state) => {
    const { repos: { loading, repos } } = state
    return {
        loading,
        repos
    }
}

const mapActionToProps = {
    loadRepos
}

export default connect(mapStateToProps, mapActionToProps)(Repos)
/**
 * Created by yangyusenhit on 2016/3/31.
 */
import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    //在组件render之后执行
    componentDidMount() {
        FooterStore.listen(this.onChange);
        FooterActions.getTopCharacters();
    }

    //在组件销毁之前执行
    componentWillUnmount() {
        FooterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let leaderboardCharacters = this.state.characters.map((character)=> {
            return (
                <li key={character.characterId}>
                    <Link to={'/characters/' + character.characterId}>
                        <img className='thumb-md'
                             src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'}/>
                    </Link>
                </li>
            )
        });

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3 className="lead"><strong>Information</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by <strong>Node.js</strong>,<strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                            <p>You may view the <a href="https://github.com/EthanYangHIT/newedenfaces-react">Source
                                Code</a> behind this project on GitHub.
                            </p>
                            <p>© 2016 Ethan Yang.</p>
                        </div>
                        <div className="col-sm-7 hidden-sx">
                            <h3 className="lead"><strong>Leaderboard</strong>  Top 5 Characters</h3>
                            <ul className="list-inline">
                                {leaderboardCharacters}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
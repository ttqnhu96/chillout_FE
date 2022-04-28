import PageNotFound from '../PageNotFound/PageNotFound';
import style from './Messenger.module.css';

// const messageList = [{
//     name: 'Vincent',
//     date: '10:12AM, Today',
//     message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
//     yourMessage: false
// }, {
//     name: 'Vincent',
//     date: '10:12AM, Today',
//     message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
//     yourMessage: true
// }, {
//     name: 'Vincent',
//     date: '10:12AM, Today',
//     message: 'Ok',
//     yourMessage: true
// }, {
//     name: 'Vincent',
//     date: '10:12AM, Today',
//     message: 'Hello',
//     yourMessage: false
// }, {
//     name: 'Vincent',
//     date: '10:12AM, Today',
//     message: 'yeah',
//     yourMessage: true
// },]
export default function Messenger() {

    // const renderMessage = () => {
    //     return <ul id={`${style['chat']}`}>
    //         {messageList.map((item, index) => {
    //             return item.yourMessage ? myMessage(item, index) : friendsMessage(item, index)
    //         })}
    //     </ul>
    // }

    // const myMessage = (info, index) => {
    //     return (<li key={index} className={`${style['me']}`}>
    //         <div className={`${style['entete']}`}>
    //             <h3>{info.date}</h3>
    //             <h2>{info.name}</h2>
    //             <span className={`${style['status blue']}`} />
    //         </div>
    //         <div className={`${style['triangle']}`} />
    //         <div className={`${style['message']}`}>
    //             {info.message}
    //         </div>
    //     </li>)
    // }

    // const friendsMessage = (info, index) => {
    //     return (<li key={index} className={`${style['you']}`}>
    //         <div className={`${style['entete']}`}>
    //             <span className={`${style['status green']}`} />
    //             <h2>{info.name}</h2>
    //             <h3>{info.date}</h3>
    //         </div>
    //         <div className={`${style['triangle']}`} />
    //         <div className={`${style['message']}`} >
    //             {info.message}
    //         </div>
    //     </li>)
    // }
    return (
        <div className={`${style['container']}`}>
            <PageNotFound />
            {/* <div className={`${style['left-col']}`}>
            </div>

            <div className={`${style['right-col']}`}>
                <main>
                    <header>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt />
                        <div>
                            <h2>Chat with Vincent Porter</h2>
                            <h3>already 1902 messages</h3>
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt />
                    </header>
                    {renderMessage()}
                    <footer>
                        <textarea placeholder="Type your message" defaultValue={""} />
                        <span href="#">Send</span>
                    </footer>
                </main>
            </div> */}
        </div >
    );
}
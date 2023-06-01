import { useState } from "react";
import { styles } from "../styles";
import { LoadingOutlined } from '@ant-design/icons'
import Avatar from "../Avatar";
import axios from "axios";

const EmailForm = props => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback) {
        axios.put('https://api.chatengine.io/users/',{ username: email, email: email, secret: email }, { headers: { "Private-Key": 'e7058909-6b49-4ccd-af7f-04ff2705521c' } })
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create user error', e))
    }

    function getOrCreateChat(callback) {
        axios.put('https://api.chatengine.io/chats/',{ usernames: ['sanchez.cano.alejandro33@gmail.com', email], is_direct_chat: true }, { headers: { "Private-Key": 'e7058909-6b49-4ccd-af7f-04ff2705521c'  } } )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create chat error', e))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)

        console.log('Sending Email', email)

        getOrCreateUser(
            user => {
                props.setUser && props.setUser(user)
                getOrCreateChat(chat => {
                    props.setChat && props.setChat(chat)
                    console.log(chat)
                })
            }
        )
    }

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? '100%' : '0px',
                    opacity: props.visible ? '1' : '0'
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1', //
                        opacity: loading ? '0.33' : '0', //
                    }
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1', // 
                        opacity: loading ? '1' : '0', // 
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)',
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />

                <div style={styles.topText}>
                    Bienvenido a nuestro<br /> soporte tecnico 👋
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '19.75%' }}
                >
                    <input
                        placeholder='Tu Correo'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                </form>

                <div style={styles.bottomText}>
                    Ingresa Tu Correo <br /> Para iniciar.
                </div>
            </div>
        </div>
    )
}

export default EmailForm;
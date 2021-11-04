import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import {VscGithubInverted} from 'react-icons/vsc';
import styles from './styles.module.scss';


export function LoginBox(){
    const {signInUrl} = useContext(AuthContext);

    return (
        <div className={styles.loginBoxWhapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className = {styles.sigInWinthGithub}>
                <VscGithubInverted size = "24" />
                Entrar com Github
            </a>
        </div>
    )
}

function AppContext(AppContext: any): {} {
    throw new Error('Function not implemented.');
}

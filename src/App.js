import './App.css';
import { useState } from 'react';

const cadastros = [{
    email: 'ccomp.lucas@gmail.com',
    nome: 'Lucas Xavier Rocha Figueiredo',
    curso: 'Pós Graduação em Arquitetura de Sistemas',
    periodo: '2º Semestre 2024',
    foto: 'lucas.jpeg'
}, {
    email: 'andreluchine@gmail.com',
    nome: 'André Araújo Luchine',
    curso: 'Pós Graduação em Ciência de Dados e Big Data',
    periodo: '2º Semestre 2024',
    foto: 'luch.jpeg'
}, {
    email: 'rayssa.araujo24@gmail.com',
    nome: 'Rayssa Arianne Morais de Araújo',
    curso: 'MBA - Gestão em Estratégias de UX',
    periodo: '2º Semestre 2024',
    foto: 'rayssa.jpeg'
}, {
    email: 'itamara.cunha@gmail.com',
    nome: 'Itamara Esteves da Cunha',
    curso: 'Jornalismo',
    periodo: '6º Semestre 2024',
    foto: 'itamara.jpeg'
}]

function App() {
    const [usuario, setUsuario] = useState(null)
    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const date = new Date()

    const logar = () => {
        if (!email) return
        const usr = cadastros.find(c => c.email === email)
        if (!usr) return

        setUsuario(usr)
    }

    return (
        <div className="App">
            {!usuario &&
                <div className="login-page">
                    <img src="logo.png" />
                    <div className="card">
                        <div className="input-field">
                            <input placeholder="Aluno ou Responsável" type="text" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                        </div>

                        <div className="input-field">
                        <input placeholder="Senha" type="password" />
                        </div>

                        <button className="botao-entrar" disabled={!email} onClick={logar}>
                            Entrar
                        </button>

                        <a className="link-esqueceu">Esqueceu a senha?</a>
                    </div>
                </div>
            }
            {!!usuario &&
                <div className="account">
                    <header className="header">
                        <img style={{ width: '48px' }} src="logo.png" />
                        <div className="hamb-wrap">
                            <div className="hamb" onClick={() => setOpen(!open)}>
                            </div>
                        </div>
                    </header>
                    {open && <div className="menu-wrapper">
                        <div className="menu">
                            <ul>
                                <li>HOME</li>
                                <li>ACADÊMICO</li>
                                <li>AUTOATENDIMENTO</li>
                                <li onClick={() => { setOpen(false); setModal(true) }}>ACESSO</li>
                                <li>MATRÍCULA</li>
                                <li>TESOURARIA</li>
                                <li>SAIR</li>
                            </ul>
                        </div>
                    </div>}

                    <div className="card-name">
                        Olá, {usuario.nome}
                        <span className="pequeno">Home</span>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-inner">
                            <header className="header">Aulas</header>
                            <div className="inner-body">
                                <ul>
                                    <li className="active">Seg</li>
                                    <li>Ter</li>
                                    <li>Qua</li>
                                    <li>Qui</li>
                                    <li>Sex</li>
                                </ul>
                                <div className="current">
                                    Nenhuma aula hoje.
                                </div>
                            </div>
                        </div>
                    </div>

                    {modal && <div className="modal-wrapper" onClick={() => setModal(false)}>
                            <div className="modal">
                                <header className="modal-header">
                                    <img src="logo.png" />
                                </header>
                                <div className="modal-body">
                                    <img className="body-foto" src={usuario.foto} alt="" style={{width: '120px', height: '160px'}} />
                                    <div className="dados">
                                        <span style={{fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>{usuario.nome}</span>
                                        <span><b>Curso: </b>{usuario.curso}</span>
                                        <span><b>RA: </b>{Math.ceil(Math.random() * 10000000)}</span>
                                        <span><b>Período: </b>{usuario.periodo}</span>
                                        <span><b>Campus: </b>Taguatinga II</span>
                                        <span><b>Turno: </b>Noturno</span>
                                        <span><b>Situação: </b>Matriculado</span>
                                    </div>
                                </div>
                                <div className="qr-code">
                                    <img src="qrcode.png" style={{ width: '80px' }} alt="" />
                                    <span>Clique para atualizar</span>
                                </div>
                                <footer className="modal-footer">
                                    Código QR gerado em {date.getDate().toString().padStart(2, '0')}/{(date.getMonth() + 1).toString().padStart(2, '0')}/{date.getFullYear()}
                                    {' '}às {date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}:{date.getSeconds().toString().padStart(2, '0')}
                                </footer>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default App;

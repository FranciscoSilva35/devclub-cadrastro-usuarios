import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"


import {
  Title,
  Container,
  //TopBackground,
  Form,
  ContainerInputs,
  Input,
  // Button,
  InputLabel
} from "./styles"

//import UsersImages from '../../assets/users.png'
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"



function Home() {

  const inputName = useRef()

  const inputAge = useRef()

  const inputEmail = useRef()




const navigate = useNavigate()
 



  async function registerNewser() {

   await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value

    })



    // console.log(data)

  }


  return (

    <Container >

      <TopBackground />

      <Form>
        <Title>Cadastrar Usuario!</Title>

        <ContainerInputs>


          <div>
            <InputLabel>
              Name<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Name Do Usuario!" ref={inputName} />
          </div>

          <div>

            <InputLabel>
              Idade<span> *</span>
            </InputLabel>

            <Input type="nanber" placeholder="Idade Do Usuario!" ref={inputAge} />
          </div>



        </ContainerInputs>

        <div style={{ width: '100%' }}>

          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>

          <Input type="email" placeholder="E-mail Do Usuario!" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewser} theme="primary">
          Cadastrar Usuario!
        </Button>

      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}> Ver List de Usuários </Button>




    </Container >


  )

}

export default Home
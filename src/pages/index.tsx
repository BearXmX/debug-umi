import { useDispatch, connect } from 'umi'

interface IProps {
  state: testModel.model['state']['name']
}

const HomePage: React.FC<IProps> = props => {
  console.log(props)

  const dispatch = useDispatch()

  return (
    <div>
      HomePage
      <div
        onClick={() =>
          dispatch({
            type: 'testModel/saveName',
            payload: Math.floor(Math.random() * 10000) + 's',
          })
        }
      >
        {props.state}
      </div>
    </div>
  )
}

export default connect(({ testModel }: modelType) => ({ state: testModel.name }))(HomePage)

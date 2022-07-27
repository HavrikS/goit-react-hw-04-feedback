import Feedback from 'components/Feedback/Feedback'

export const App = () => {
  

  return (
    <div
      style={{        
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      <Feedback />
    </div>
  );
};

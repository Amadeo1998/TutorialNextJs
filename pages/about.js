export default function About() {
    return <div>About</div>
  }

  export async function getStaticProps(context){
    return {
      redirect:{
        destination: '/',
        permanent: true
      }
    }
  }
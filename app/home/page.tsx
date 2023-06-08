import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white py-4 px-8">
        <Navbar />
      </div>
      <div className="bg-black w-full h-1"></div>

      <div className="flex-grow bg-custom-purple">
        <p className="text-white py-4 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat risus ut aliquam consequat. Sed malesuada quam ut venenatis lobortis. Proin finibus aliquam enim, sed lacinia nisl consequat ut. In convallis ultrices justo, ut condimentum urna tempor sit amet.
        </p>
        <div className="bg-white w-full h-60 text-custom-purple">
          fasfs
        </div>
        <div className="text-white">
          Avantaje pentru tine, client Keez <br></br>
          - Totul într-o singură aplicație mobilă și portal web dedicate clienților: contabilitate completă, expert contabil dedicat, salarizare și facturare. <br></br>
          - Ai la îndemână cele mai uzuale rapoarte financiare în limbaj antreprenorial (nu trebuie să știi sa citești o balanță), în timp real, bazate pe cifrele din contabilitate. <br></br>
          - Keez - firma de contabilitate online îți oferă acces exclusiv la cele mai uzuale șabloane de documente, utile în activitatea curentă. <br></br>
          - Integrare cu diverse softuri operaționale (de gestiune/de facturare/de vânzare). <br></br>
          - Comunicare, suport și consultanță din partea expertului contabil dedicat, prin chat, 24/7 și telefonic, la nevoie (toți cei contabilii din echipa Keez sunt experți autorizați CECCAR). <br></br>
          - Înrolare online, devii client Keez imediat, plata cu cardul a abonamentului lunar pentru serviciile contractate. <br></br>
          - Calitatea este o prioritate permanentă (calitatea proceselor Keez este auditată extern).
        </div>
      </div>
    </div>


  )
}

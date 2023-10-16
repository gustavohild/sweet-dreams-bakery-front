import { useContext } from "react";
import styles from "./UserMenu.module.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { AppProviderContext } from "../../../../shared/Providers/AppProviders";


export default function UserMenu() {
    const { name, token } = useContext(AppProviderContext);

    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <div onClick={() => navigate("/useradmin")}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABVZJREFUaEPtmnvIn2MYxz9fx5QixpjjHGdazCTWYouSoUZC8oekzMjmfAwLY2zYnJXI/pBpMjn94TDkFMpYzkxzPpZSUvjqWs+rt3vP+z6H3/1sb/Ze/7y9/e7rur7f+7oP131dj1jPROsZX4YJ/98jPhzhLiJsexRwAnA0MBqI/0O+Bb4AngYWS/q+C//9bXYaYdvjgSuA44ANKsj8AywBrpX0flfEOyNs+3Lg+hbADVwi6eYWupUqnRC2fSswq9L74APmS7qwRxtrqGcnbPs84JZMQGdJWpDJ1mozWQnbPhR4aQCAq4qJWAEsL8bsB4wDzgd2GkBvkqRXc5HORtj2hsBHwB4l4B4HTpP0Wxlw21sADwLTSn7/BBgr6e8cpHMSPhcoW36196Lt2AqxJVKZLuneoUY4ort3Auo9YIKkv+qAtb0J8C6wTzJ+haRY+j1Llgjb3gb4MUETJMdJiomoLbZjX78NbJQojZSU+qhtt29gLsLHAk8k3pdJmtIYEWA7DqmJie5Rkp5tY6+/Ti7C04G7EzAPSDq9DUDbi4BTE90zJN3fxl4XhCN9vC4BM1fSpW0A2o4sK006LpN0Yxt7XRA+C7grAbNUUtk1U4nZdmyP2Cb9JctJnWtJH18k/v0BrpK0SyW7kgG2vwZ2SH6aJmlpG3tdRDiee9+UgJkq6ZkmIG0fCZQdTqMkfdfEVtnYLBEOw7YjZdw3cfJV3M2S/qgD1PZmQGRWOybjl0vav46NqjE5CZ8N3FHicIGkWi8n26EfdlLJsn/DaE7CkSV9CuxcArgql94SeKjkoApTsUpGD7lculjWhwPPDbCs4iCKXDleSpE+blxsgaiKXASMHEBviqRlVUu17u/ZItzn0HY89ebXBVAxbqakhZlsrTaTnXAR6dnAVT0CnS3pmh5trKHeCeGC9FQgUsStGoL+JdLKHHlzp9dSmXHbcRjNAc6sUbWMB/49UeUcqFDQcOJKh3cW4f7ebEfWFNlY1KV3K6lLPwk8Jinq1J3KWiHcKYOGxocJN5yw0uG2DyrSwziwtgYiZawjkYLGofVrJByS3qqj1GRMtgjbjudcX/8oSOaQIP8U8Kik2Oc9S0+EbUe/6BTgypICXs/gEgMfRt8JeERS9KFaSWvCtiNnjqff2Fae2ytFo+0YSVHYbyytCNveE4j8tq/t2dhxjwpxfU2WFI+VRtKYcFFGfaFGBvUG8GVRGPi9JqrNi0rHrsDBFTpxsAXpRq3VRoRtbwe8M0hkY59F92GJpJ9rkiwdZnsEcCJwTklhvk8nqizjJf1U11dTwlEgn1Bi/IdIH3PUnMqA247TP4qEUfBP5U1JVavhP53ahG3PBS4ucfh5sbTivduZ2I5l/iIQf1OZIylKxZVSi7Dt6BmVtUzipDywyZKqRDTIANvbFm2Ystbq7pLie5FBpS7hOKTStsmfBdko3q01sX0A8BqwaeL0eUlHVAGpJGx7EvBKiaEZktL2SpW/LL/bngncVmJsoqTXB3NSh/A84ILEyGfAmFyFtaazUDTfPwD2SnTnSYr62IBSh/DKkoMiW9m0Kdm+8bbjuro90V8pKd7b7QjbHgPE3dpf4rOiEZLi4l9nYnv7IqlJgxYr7+OBgA0aYdsnAw8nyi9LOmydMe3n2HYcXockWE6StLgt4bKu4EJJcWisc7F9JzAjARIJ0H1tCZd9TVf7ku96RmzfAKQ96PiK76a2hKMufHWi3Em9uM3k2G6Mr2oPNzbYBnhbnS4IT448OQEUH6tk6/W0JRt6thvjq7yHewE0FHWHCQ/FqOTENBzhnLM5FG0NR3goRiUnpn8BRZekTJ4zgyYAAAAASUVORK5CYII=" /></div>
            <div className={styles.userText}>Olá usuário,<br />
                {name ? <strong><Link to="/user" className={styles.signIn}>{name}</Link></strong> : <strong><Link to="/auth" className={styles.signIn}>Entrar</Link></strong>}
            </div>
            {token ? <div onClick={() => navigate("/cart")}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABBJJREFUaEPtmk2oVVUUx3//EvoCEVP7UjDNSdEgcCIVGQkJWkgpogQNIpJKKWhg9GXaoEnkB6lBkyhM1ES0iVFpWSREFESO7AMyvyhoooioS1bsB5ftPu+ec8/Z9717392TN3jr7LV/+7/vWuusfcQYGxpjvAyA+13xgcIDhftsB5JH2szWFHD+Dfwg6ede3YciYGsDdBh4RNI/vQbeKbBz/ihp9lgCdtbnJG3uJeg6CjvnUUmz+gE4FbSuAVYn4OZJ+rJXoCsVHmZ2EHgggtst6fF+BV4C7IjgLgG3STrZC9BVFR4H/AXcHMGtkfRm3wE7UChK3ojgXF1X2dUe1aOSwgH4FuB4guoDwCuxkR7ngUOSDqUWUhk4QO8EFo80WRv/L0l6J7bpFHgucGCUA/8raVIjwEHlo8DMUQx9TNK0JoGfBzaNYuDtkpY1CTwe8Oh8XTSpB4uvurgRtwJPJ/w9LOnzxoDDsd4CrIgmPSLprm4Bm9mrwLrIn2eRqZKueM3tKGgNTW5mdwK/JuDmSvq6G9Bm9jtwe+TrbUkvN5aWWicys2+A+6PJd0hamhvYzO7znJvwM0PSH7mAHWx7NPkFYFru+trMvNh5KvJ9WNKcos2udaTD73hE6mszuxbwFtMNEdwKSe9nAw7Qa4HXIidZ62szewL4KPJ5Dpgk6UxuYH978jr6qsjREkm7cvyWzewL4KFo7mTubbWpfaRbIvanwGPRAg5KerBpYDPz3HsMrrgbmy9p/3D+mgT23fZdj8cdkn5rErpq7s2icPgtp+rr9yR5GdrYqJp7cwKvAjZEZGeByZL8b+3RSe7NCez19Qng+ojsWUlehtYeneTebMDhWG8FnonIGqmvO829uYGz1ded5t6swEFlr2+9zm0dfgE3bMoocd497d0d2X0iaXmJZ/83aSwttTo0M3/x3lZ2ETXt2ubebijs9bWXljfWhGn3eOF7b9GDWRQOx/ot4JV2K675/8L33pEAngD84p2HmlBFj3tenyUp1SMvdJlN4aCydzUXABMbhvYbjl2SjlSdNytw1cV0w34A3PQum9m7gOdJvwX4HvBA81kVP2a2MFzGe+vGuxzbJL1YZY4h26wKm9le/9onsTD/AqgUdIDdl5hjn6RHq0JnAx5mob7G7yTFlVhy7Wb2LXBvAVjpjcuusJl5j8t7XalxSdLVZdQxs4uJ1tHQo69Lipvww06bU+GVwMYC76cl3VQS+BQwpcB2laRK91s5gf3m7s8CddaXDToh6L2QAPZcPF2Sf4JRemQDDoWHt1I/jKArB5tE8HPYJyV9XJo0GGYFDtCu9CLAS82fykbnGCQEwXuA/4A9VZXNHrSq7ny37LMr3C2Qsn4GwGV3qlftBgr3qnJl1z3mFL4Mi21kTAMj1SMAAAAASUVORK5CYII=" /></div> : <div onClick={() => navigate("/auth")}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABBJJREFUaEPtmk2oVVUUx3//EvoCEVP7UjDNSdEgcCIVGQkJWkgpogQNIpJKKWhg9GXaoEnkB6lBkyhM1ES0iVFpWSREFESO7AMyvyhoooioS1bsB5ftPu+ec8/Z9717392TN3jr7LV/+7/vWuusfcQYGxpjvAyA+13xgcIDhftsB5JH2szWFHD+Dfwg6ede3YciYGsDdBh4RNI/vQbeKbBz/ihp9lgCdtbnJG3uJeg6CjvnUUmz+gE4FbSuAVYn4OZJ+rJXoCsVHmZ2EHgggtst6fF+BV4C7IjgLgG3STrZC9BVFR4H/AXcHMGtkfRm3wE7UChK3ojgXF1X2dUe1aOSwgH4FuB4guoDwCuxkR7ngUOSDqUWUhk4QO8EFo80WRv/L0l6J7bpFHgucGCUA/8raVIjwEHlo8DMUQx9TNK0JoGfBzaNYuDtkpY1CTwe8Oh8XTSpB4uvurgRtwJPJ/w9LOnzxoDDsd4CrIgmPSLprm4Bm9mrwLrIn2eRqZKueM3tKGgNTW5mdwK/JuDmSvq6G9Bm9jtwe+TrbUkvN5aWWicys2+A+6PJd0hamhvYzO7znJvwM0PSH7mAHWx7NPkFYFru+trMvNh5KvJ9WNKcos2udaTD73hE6mszuxbwFtMNEdwKSe9nAw7Qa4HXIidZ62szewL4KPJ5Dpgk6UxuYH978jr6qsjREkm7cvyWzewL4KFo7mTubbWpfaRbIvanwGPRAg5KerBpYDPz3HsMrrgbmy9p/3D+mgT23fZdj8cdkn5rErpq7s2icPgtp+rr9yR5GdrYqJp7cwKvAjZEZGeByZL8b+3RSe7NCez19Qng+ojsWUlehtYeneTebMDhWG8FnonIGqmvO829uYGz1ded5t6swEFlr2+9zm0dfgE3bMoocd497d0d2X0iaXmJZ/83aSwttTo0M3/x3lZ2ETXt2ubebijs9bWXljfWhGn3eOF7b9GDWRQOx/ot4JV2K675/8L33pEAngD84p2HmlBFj3tenyUp1SMvdJlN4aCydzUXABMbhvYbjl2SjlSdNytw1cV0w34A3PQum9m7gOdJvwX4HvBA81kVP2a2MFzGe+vGuxzbJL1YZY4h26wKm9le/9onsTD/AqgUdIDdl5hjn6RHq0JnAx5mob7G7yTFlVhy7Wb2LXBvAVjpjcuusJl5j8t7XalxSdLVZdQxs4uJ1tHQo69Lipvww06bU+GVwMYC76cl3VQS+BQwpcB2laRK91s5gf3m7s8CddaXDToh6L2QAPZcPF2Sf4JRemQDDoWHt1I/jKArB5tE8HPYJyV9XJo0GGYFDtCu9CLAS82fykbnGCQEwXuA/4A9VZXNHrSq7ny37LMr3C2Qsn4GwGV3qlftBgr3qnJl1z3mFL4Mi21kTAMj1SMAAAAASUVORK5CYII=" /></div>}

        </div>
    )
}
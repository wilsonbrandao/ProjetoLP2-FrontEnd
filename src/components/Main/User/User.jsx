import './UserContentStyle.scss';

export function User({ userInfo }) {

    const stringEmMaiusculo = str => str.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());

    return (
        <li key={userInfo.id} className="userContainer">
            <img
                className='PerfilPhoto'
                src={userInfo.picture.large}
                alt={userInfo.gener === "m" ? "Foto de um homem" : "Foto de uma mulher"}
            />
            <p>{stringEmMaiusculo(userInfo.name.first)} {stringEmMaiusculo(userInfo.name.last)}</p>
            <p>{stringEmMaiusculo(userInfo.location.street)}</p>
            <p>{stringEmMaiusculo(userInfo.location.city)}</p>
            <p>{stringEmMaiusculo(userInfo.location.state)} - CEP: {userInfo.location.postcode}</p>
        </li>
    )
}
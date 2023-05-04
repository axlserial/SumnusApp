import {ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, LoaderScreen} from 'react-native-ui-lib';
import CardOpcion from './CardOption';


// Recibe un objeto de navegación
type CuentosProps = {
	navigation: NavigationProp<any>;
};

const cuentos = [
	{ titulo: 'relax1', desc: 'es una cancion relajante', url: 'https://fine.sunproxy.net/file/YTRCNXltUjRYRHRuWGMvTnFxRlJjcWFCWGNUS2JEUi8yM0l3NnR4THRDcEc4SkE0UitTQTJvS0NUaW5wUCtqWDJGOWh6bFh3UTI5Y29tb3NabnZxTkFYYllPUk9pWGdDSG9XN0lweHBXNjg9/Darude_-_Sandstorm_Radio_Edit_Radio_Edit_(ColdMP3.com).mp3', imagen: require('../../assets/images/agua.png') },
	{ titulo: 'relax2', desc: 'es una melodía pacífica', url: 'https://fine.sunproxy.net/file/YTRCNXltUjRYRHRuWGMvTnFxRlJjcWFCWGNUS2JEUi8yM0l3NnR4THRDcEc4SkE0UitTQTJvS0NUaW5wUCtqWDJGOWh6bFh3UTI5Y29tb3NabnZxTkFYYllPUk9pWGdDSG9XN0lweHBXNjg9/Darude_-_Sandstorm_Radio_Edit_Radio_Edit_(ColdMP3.com).mp3', imagen: require('../../assets/images/libro.png') },
	{ titulo: 'relax3', desc: 'sonidos de cuencos tibetanos', url: 'https://fine.sunproxy.net/file/YTRCNXltUjRYRHRuWGMvTnFxRlJjcWFCWGNUS2JEUi8yM0l3NnR4THRDcEc4SkE0UitTQTJvS0NUaW5wUCtqWDJGOWh6bFh3UTI5Y29tb3NabnZxTkFYYllPUk9pWGdDSG9XN0lweHBXNjg9/Darude_-_Sandstorm_Radio_Edit_Radio_Edit_(ColdMP3.com).mp3', imagen: require('../../assets/images/paisaje.png') },
  ];

const CuentosShort = ({navigation}: CuentosProps) => {
	return (
		<View style={{flex: 1, alignItems: 'center', padding: 15, gap: 10}}>
			<View style={{alignSelf: 'flex-start', marginBottom: 10}}>
				<Text text60>Selecciona un Audio</Text>
			</View>
			{cuentos.map((elemento, i) => 
				<CardOpcion
					key={i}
					navigation={navigation}
					to="Reproductor"
					titulo={elemento.titulo}
					desc={elemento.desc}
					url={elemento.url}
					imagen={elemento.imagen}
				/>)
			}
		</View>
		
	);
}

export default CuentosShort;

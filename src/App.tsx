import React, { ChangeEvent} from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form} from 'react-bootstrap';
import seth from './static/images/seth_laugh.jpg';
import sethLaugh from './static/audio/seth.mp3';

function App() {
	let audio = new Audio(sethLaugh); //new Audio('./static/audio/seth.mp3');
	const start = () => {
		//audio.loop = true;
		audio.play();
	}

	const onRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
		let rangeValue = Number(event.target.value)
		console.log(rangeValue/100);
		audio.volume = Number(event.target.value)/100
	}
	
	return (
		
		<Container className='p-3'>
			<Col lg={6}>
				<h2 className="display-5">Jajajajaja Soundboard</h2>
			</Col>
			<Col lg={4}>
				<Button variant="primary" onClick={start}>
					<Image src={seth} fluid rounded/>
				</Button>
				<Form.Range className='volume-slider' onChange={onRangeChange}/>
				<h2 className="display-5">Post</h2>
				<p>some random text</p>
			</Col>
			<Row >
				<Col className='d-grid gap-2'>
					<Button variant='primary' size='lg' className='mr-1'>Hello</Button>
				</Col>
				<Col>
					<Button variant='primary' size='lg' className='mr-1'>Hello</Button>
				</Col>
				<Col>
					<Button variant='primary' className='mr-1'>Hello</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default App;

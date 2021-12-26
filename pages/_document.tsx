import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto&display=swap"
						rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@400;500&display=swap" />
					<link
						href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@300;400&display=swap"
						rel="stylesheet" />
					<link
						rel="stylesheet"
						href="css/styles.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
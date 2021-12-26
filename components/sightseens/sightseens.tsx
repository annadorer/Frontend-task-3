import { Sightseen, ISightseens__item } from "./sightseens__item"

const items: ISightseens__item[] = [
	{
		title: 'Тропа предков',
		image: 'img/sightseens.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.',
		descriptionpk: 'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.'
	},
	{
		title: 'Приисковый',
		image: 'img/sightseens.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.',
		descriptionpk: 'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.'
	},
	{
		title: 'Сундуки',
		image: 'img/sightseens.png',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationemcommodi ipsa adipisci facilis cum placeat velit. Earum consectetur cum maxime. Molestias quos dicta illumeos. Eius odio fugit ducimus hic est quae debitis voluptatum, cumque recusandae repellat autvero.',
		descriptionpk: 'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.'
	},

]

export function Sightseens() {
	return (
		<section className="sightseens" id="sightseens">
			<h2 className="sightseens__title">Достопримечательности</h2>
			<div className="sightseens__container">
				{
					items.map((item: ISightseens__item, index: number) =>
						<Sightseen item={item} key={'item_${index}'} />
					)
				}
			</div>
		</section>
	)
}
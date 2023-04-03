import { PostModel } from './post.model'
import { Post } from './post.interface'

export class PostService {
	private postmodel = PostModel

	public create = async (title: string, body: string): Promise<Post> => {
		try {
			const post = await this.postmodel.create({ title, body })
			return post
		} catch (e) {
			throw new Error('Unable to create post')
		}
	}
}

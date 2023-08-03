import { Schema, model as m } from 'mongoose'
import { Post } from './post.interface'

const PostSchema = new Schema<Post>(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
)

export const PostModel = m<Post>('Post', PostSchema)

// import { Schema, model, Document } from 'mon goose'

export interface Post extends Document {
	title: string
	body: string
}

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
	{ timestamps: true }
)

export const PostModel = model<Post>('Post', PostSchema)

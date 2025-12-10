import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    consultant: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: [true, 'Project image is required'],
    },
    status: {
      type: String,
      enum: ['completed', 'ongoing'],
      default: 'ongoing',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;

import { prop, Typegoose, index } from 'typegoose';
import DbAdapter  from '@helpers/DbAdapter';

@index({ name: 1}, { unique: true })

export class Test extends Typegoose {

  @prop({ required: true })
  _id: string;

  @prop({ required: true })
  name: string;

  @prop()
  mappings: string[];
}

export const TestModel = new Test().getModelForClass(Test, {
    schemaOptions: {
      _id: false,
      collection: 'tests',
      timestamps: { createdAt: true, updatedAt: true },
    },
    existingConnection: DbAdapter.connection,
  });


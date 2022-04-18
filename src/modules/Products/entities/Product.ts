import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Category } from './Category';

@Entity('products')
class Product{
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  price: number;
  
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  @Column()
  avaliable: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) {
      this.id = uuidV4();
    }
    this.avaliable = true;
  }
}

export { Product };
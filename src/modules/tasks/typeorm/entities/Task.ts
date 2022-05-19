import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

//Conceituar melhor a diferença de Entity e criação do BD pelo migrations
@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    taskName: string;
    @Column()
    description: string;
    @Column()
    complete: boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}
//MUDAR TODAS COLUNAS E VALORES MANGOLÃO
// ESTE É A CLASSE DO MIGRATION QUE VAI PRO BD
export default Task;

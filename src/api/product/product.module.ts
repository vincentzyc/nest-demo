import { Module } from '@nestjs/common';
import { UserService } from './product.service';
import { UserController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class ProductModule {}

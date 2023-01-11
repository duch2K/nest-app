import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModel, UserSchema } from './user.model';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { getJwtConfig } from '../config/jwt.config';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      { name: UserModel.name, schema: UserSchema, collection: 'User' },
    ]),
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigModule],
      useFactory: getJwtConfig,
    }),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

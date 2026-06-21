import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from 'src/modules/application/user/user.service';
import { UpdateUserPreferencesDto } from './inputs/update-user-preferences.input';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/preferences')
  async getUserPreferences(@Param('id') id: string) {
    return this.userService.getUserPreferences(id);
  }

  @Post('/:id/preferences')
  async updateUserPreferences(@Param('id') id: string, @Body() input: UpdateUserPreferencesDto) {
    return this.userService.updateUserPreferences({
      userId: id,
      preferences: input.preferences,
      quietHours: input.quietHours,
    });
  }
}

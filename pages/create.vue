<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row>
        <v-col cols="12" md="12">
          <v-card>
            <v-card-title style="color: #4c00ff"
              ><b style="color: #4c00ff">Create your team</b>
            </v-card-title>
            <v-divider />
            <v-row justify="center"
              ><v-subheader><b>TEAM INFORMARTION</b></v-subheader></v-row
            >
            <v-row justify="center">
              <v-col cols="6">
                <v-row justify="center">
                  <v-col cols="12" md="8" sm="6">
                    <b>Team name</b>
                    <v-text-field
                      v-model="teamName"
                      placeholder="insert team name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8" sm="6">
                    <b>Description</b>
                    <v-textarea
                      v-model="description"
                      filled
                      auto-grow
                      outlined
                      dense
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row justify="center">
                  <v-col cols="12" md="8" sm="6">
                    <b>Team website</b>
                    <v-text-field
                      v-model="website"
                      placeholder="https://myteam.com"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8" sm="6">
                    <b>Team type</b>
                    <v-radio-group v-model="type" dense row>
                      <v-radio
                        color="rgba(147, 61, 123, 1) "
                        label="Fantasy"
                        value="false"
                      ></v-radio>
                      <v-radio
                        color="rgba(147, 61, 123, 1) "
                        label="Real"
                        value="true"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8" sm="6">
                    <b>Tags</b>
                    <v-combobox
                      v-model="tags"
                      :items="itemsTags"
                      chips
                      clearable
                      multiple
                      solo
                    >
                      <template #selection="{ attrs, item, select, selected }">
                        <v-chip
                          v-bind="attrs"
                          dark
                          color="red"
                          :input-value="selected"
                          close
                          @click="select"
                          @click:close="remove(item)"
                        >
                          <strong>{{ item }}</strong>
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center"
              ><v-subheader><b>CONFIGURE SQUAD</b></v-subheader></v-row
            >
            <v-row justify="center">
              <v-col cols="6">
                <v-row align="center" justify="center">
                  <b class="mr-5">Formation</b>
                  <v-col cols="12" md="3" sm="6">
                    <v-select :items="formations" dense></v-select>
                  </v-col>
                </v-row>
                <v-row
                  class="mt-0 pt-0"
                  style="height: 500px"
                  align="center"
                  justify="center"
                >
                  <field></field>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="6" sm="6">
                    <v-btn
                      class="btStyleColor mb-3"
                      block
                      dark
                      @click="validate()"
                      >Save</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row justify="center">
                  <v-col v-if="!allSelected" cols="12" md="8" sm="6">
                    <b>Search Players</b>
                    <v-text-field
                      ref="search"
                      v-model="search"
                      full-width
                      hide-details
                      single-line
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    v-for="(selection, i) in selections"
                    :key="selection.name"
                    cols="12"
                    md="8"
                    sm="6"
                  >
                    <v-chip close @click:close="selected.splice(i, 1)">
                      <v-avatar left>
                        <v-img :src="selection.icon"></v-img>
                      </v-avatar>
                      {{ selection.name }}
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8" sm="6">
                    <v-list three-line>
                      <template v-for="item in categories.slice(0, 5)">
                        <v-list-item
                          v-if="!selected.includes(item)"
                          :key="item.name"
                          @click="selected.push(item)"
                        >
                          <v-list-item-avatar>
                            <v-img
                              :alt="`${item.title} avatar`"
                              :src="item.icon"
                            ></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              ><b>Name: </b
                              ><span style="color: rgba(147, 61, 123, 1)">{{
                                item.name
                              }}</span>
                            </v-list-item-title>
                            <v-list-item-title
                              ><b>Nacionality: </b
                              ><span style="color: rgba(147, 61, 123, 1)">{{
                                item.nacionality
                              }}</span>
                            </v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-list-item-title
                              ><b>Age: </b
                              ><span style="color: rgba(147, 61, 123, 1)">{{
                                item.age
                              }}</span>
                            </v-list-item-title>
                          </v-list-item-action>
                        </v-list-item>
                      </template>
                    </v-list>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import { mapActions } from 'vuex'
import Field from '~/components/footballField'
export default {
  components: {
    Field,
  },
  data() {
    return {
      teamName: '',
      description: '',
      website: '',
      type: '',
      tags: [],
      itemsTags: ['Ataque', 'Defesa', 'Treino', 'Favorito'],
      players: [
        {
          name: 'Cristiano Ronaldo',
          icon:
            'https://conteudo.imguol.com.br/c/noticias/e7/2021/02/27/cristiano-ronaldo-comemora-seu-gol-no-empate-por-1-a-1-da-juventus-com-o-hellas-verona-1614466167994_v2_450x337.jpg',
          nacionality: 'Portugal',
          age: '32',
        },
        {
          name: 'Kylian Mbappé',
          icon:
            'http://t1.gstatic.com/images?q=tbn:ANd9GcTM5FkM9AiLyCm0KVWVMvZYMqNq5Hml9wL12LE6artP1Uyz5_tuOyEJBVeSuapg',
          nacionality: 'Francês',
          age: '22',
        },
        {
          name: 'Wayne Rooney',
          icon:
            'https://talksport.com/wp-content/uploads/sites/5/2020/01/TALKSPORT-Wazza.jpg?strip=all&w=960&quality=100',
          nacionality: 'Inglês',
          age: '35',
        },
        {
          name: 'Didier Drogba',
          icon:
            'https://upload.wikimedia.org/wikipedia/commons/3/34/Didier_aug_2014.jpg',
          nacionality: 'Marfinense',
          age: '42',
        },
        {
          name: 'Frank Lampard',
          icon:
            'https://resources.premierleague.com/premierleague/photos/players/250x250/p2051.png',
          nacionality: 'Inglês',
          age: '42',
        },
      ],
      formations: [
        '3-2-2-3',
        '3-2-3-1',
        '3-4-3',
        '3-5-2',
        '4-2-3-1',
        '4-3-1-1',
        '4-3-2',
        '4-4-2',
        '4-5-1',
        '5-4-1',
      ],
      search: '',
      selected: [],
    }
  },
  computed: {
    allSelected() {
      return this.selected.length === this.players.length
    },
    categories() {
      const search = this.search.toLowerCase()

      if (!search) return this.players

      return this.players.filter((item) => {
        const text = item.name.toLowerCase()

        return text.includes(search)
      })
    },
    selections() {
      const selections = []

      for (const selection of this.selected) {
        selections.push(selection)
      }

      return selections
    },
  },
  watch: {
    selected() {
      this.search = ''
    },
  },
  methods: {
    ...mapActions('teams', ['CreateCLUB']),

    validate() {
      this.send()
    },
    remove(item) {
      this.tags.splice(this.tags.indexOf(item), 1)
      this.tags = [...this.tags]
    },
    send() {
      this.CreateCLUB({
        teamName: this.teamName,
        description: this.description,
        website: this.website,
        type: this.type,
        tags: this.tags,
        itemsTags: this.itemsTags,
        players: this.players,
        formations: this.formations,
        myTeam: true,
      })
    },
  },
}
</script>
<style>
.btStyleColor {
  background: linear-gradient(
    180deg,
    rgba(237, 76, 105, 1) 0%,
    rgba(147, 61, 123, 1) 60%
  );
}
.border {
  border: 2px double rgba(237, 76, 105, 1);
}
.full-height {
  height: 100%;
}
.col {
  padding: 0;
  margin: 0;
}
</style>
